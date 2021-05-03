const userModel = require('../../models/user');

class RentServ {

    async RequestRent(user, rentData) {
        //må registrera som ett rent-schema för aktuell maskin, vilket innebär att jag behöver skicka med vilken maskin det gäller?
        //kan göra det i body såklart.
        //det som behövs är då maskinens ägare, vilken maskin och vem som ska hyra den, vilket/vilka datum. sen hämtas priset från maskinen.
        let currentUser = await userModel.findById(user._id);
        if(!currentUser){
            throw new Error('Bad user');
        }
        let owner = await userModel.findById(rentData.ownerOfMachine);
        if(!owner){
            throw new Error('Bad owner');
        }
        //skapa ett nytt schema för varje uthyrning och koppla det med user._id samt lagra _id från uthyrningnen i varje användare istället.
        rentData.status = 'requested';
        rentData.renter = user;
        rentData.owner = owner;
        //något med felhantering här?
        await currentUser.myRents.push(rentData);
        await owner.machines.id(rentData.machine).rentings.push(rentData);
        currentUser.markModified('myRents');
        currentUser.save();
        owner.markModified('machines');
        owner.save();
        //den lagarar förfrågan nu, men också massa blajdata, fixa det.
        return { owner };
    }

    async AcceptRent(user, requestId){
        let currentUser = await userModel.findById(user._id);
        if(!currentUser){
            throw new Error('Bad user');
        }
        
    }

    async DeclineRent(user, requestId){

    }

    async CompleteRent(user, rentId) {
        //mark the status as complete in the schema
    }

    async AddScore(user, rentId){

    }

}

module.exports = RentServ;