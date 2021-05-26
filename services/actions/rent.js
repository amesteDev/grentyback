const userModel = require('../../models/user');
const rentModel = require('../../models/rent');
const sendMail = require('../helpers/sendmail');

const sendmail = new sendMail();

class RentServ {

    async RequestRent(user, rentData) {
        let currentUser = await userModel.findById(user);
        if (!currentUser) {
            return  { err: 'no-user', msg: 'Något gick fel' } 
        }

        let owner = await userModel.findById(rentData.owner);
        if (!owner) {
            return  { err: 'no-owner', msg: 'Något gick fel' } 
        }

        rentData.acceptanceStatus = 'requested';
        rentData.renter = user._id;

        const rentToSave = await rentModel.create({
            ...rentData,
        });

        if (!rentToSave) {
            return  { err: 'no-save', msg: 'Något gick fel' } 
        }

        owner.myRents.push(rentToSave._id);
        currentUser.myRents.push(rentToSave._id);
        currentUser.markModified('myRents');
        currentUser.save();
        owner.markModified('myRents');
        owner.save();

        sendmail.newRequest(owner);


        return { rentToSave };
    }


    async fetchRents(user) {
        let currentUser = await userModel.findById(user);
        let rentIds = currentUser.myRents;
        const rents = await rentModel.find({ '_id': { $in: rentIds } });
        return rents;
    }


    async AcceptRent(user, rent) {
        let currentRentRequest = await rentModel.findById(rent._id);
        if (!currentRentRequest) {
            throw new Error('No such rent found');
        }

        if (currentRentRequest.owner == user._id) {
            currentRentRequest.acceptanceStatus = 'accepted';
            currentRentRequest.markModified();
            currentRentRequest.save();

            const renter = await userModel.findById(currentRentRequest.renter);
            sendmail.acceptedRent(renter);
            return { msg: 'Svar skickat' }
        } else {
            return { err: 'no-owner', msg: 'Du äger inte maskinen' }
        }

    }

    async DeclineRent(user, rent) {
        let currentRentRequest = await rentModel.findById(rent._id);
        if (!currentRentRequest) {
            throw new Error('No such rent found');
        }
        if (currentRentRequest.owner == user._id) {
            currentRentRequest.acceptanceStatus = 'declined';
            currentRentRequest.markModified();
            currentRentRequest.save();

            const renter = await userModel.findById(currentRentRequest.renter);
            sendmail.declineRent(renter);

            return { msg: 'Svar skickat' }
        } else {
            return { err: 'no-owener', msg: 'Du äger inte maskinen' }
        }

    }

    async CompleteRent(user, rentId) {
        //mark the status as complete in the schema
        let currentRentRequest = await rentModel.findById(rentId);
        if (!currentRentRequest) {
            return  { err: 'no-rent', msg: 'Något gick fel' } 
        }

        currentRentRequest.acceptanceStatus = 'completed';
        currentRentRequest.markModified();
        currentRentRequest.save();
    }



}

module.exports = RentServ;