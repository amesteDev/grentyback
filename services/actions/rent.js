const userModel = require('../../models/user');
const rentModel = require('../../models/rent');
class RentServ {

    async RequestRent(user, rentData) {
        //må registrera som ett rent-schema för aktuell maskin, vilket innebär att jag behöver skicka med vilken maskin det gäller?
        //kan göra det i body såklart.
        //det som behövs är då maskinens ägare, vilken maskin och vem som ska hyra den, vilket/vilka datum. sen hämtas priset från maskinen.
        let currentUser = await userModel.findById(user);
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

    async AcceptRent(user, rentId) {
        let currentRentRequest = await rentModel.findById(rentId);
        if (!currentRentRequest) {
            throw new Error('No such rent found');
        }

        currentRentRequest.acceptanceStatus = 'accepted';
        currentRentRequest.markModified();
        currentRentRequest.save();

        //skicka något meddelande i chatten att den är accepterad.

    }

    async DeclineRent(user, rentId) {
        let currentRentRequest = await rentModel.findById(rentId);
        if (!currentRentRequest) {
            throw new Error('No such rent found');
        }

        currentRentRequest.acceptanceStatus = 'declined';
        currentRentRequest.markModified();
        currentRentRequest.save();
        //skicka något meddelande i chatten att den är declined.
    }

    async CompleteRent(user, rentId) {
        //mark the status as complete in the schema
        let currentRentRequest = await rentModel.findById(rentId);
        if (!currentRentRequest) {
            throw new Error('No such rent found');
        }

        currentRentRequest.acceptanceStatus = 'completed';
        currentRentRequest.markModified();
        currentRentRequest.save();
    }

    async AddScore(user, rentId) {

        
        //den här kräver en del tanke om hur det ska gå till?
        //lyfta ut det helt till profil-route istället?
        //typ att det i ovan när det är "completed" så görs någon signal om att betygsätta varandra
    }

}

module.exports = RentServ;