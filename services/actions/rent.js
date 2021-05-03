const userModel = require('../../models/user');
const rentModel = require('../../models/rent');
class RentServ {

    async RequestRent(user, rentData) {
        //må registrera som ett rent-schema för aktuell maskin, vilket innebär att jag behöver skicka med vilken maskin det gäller?
        //kan göra det i body såklart.
        //det som behövs är då maskinens ägare, vilken maskin och vem som ska hyra den, vilket/vilka datum. sen hämtas priset från maskinen.
        let currentUser = await userModel.findById(user._id);
        if (!currentUser) {
            throw new Error('Bad user');
        }
        
        let owner = await userModel.findById(rentData.owner);
        if (!owner) {
            throw new Error('Bad owner');
        }
       
        rentData.acceptanceStatus = 'requested';
        rentData.renter = user._id;
      
        const rentToSave = await rentModel.create({
            ...rentData,
        });
     
        if (!rentToSave) {
            throw new Error('Something went wrong');
        }

        owner.myRents.push(rentToSave._id);
        currentUser.myRents.push(rentToSave._id);
        currentUser.markModified('myRents');
        currentUser.save();
        owner.markModified('myRents');
        owner.save();

        return { rentToSave };
    }

    async AcceptRent(user, requestId) {
        let currentUser = await userModel.findById(user._id);
        if (!currentUser) {
            throw new Error('Bad user');
        }

    }

    async DeclineRent(user, requestId) {

    }

    async CompleteRent(user, rentId) {
        //mark the status as complete in the schema
    }

    async AddScore(user, rentId) {

    }

}

module.exports = RentServ;