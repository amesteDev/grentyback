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
        return { owner };



        /*
        await owner.machines.id(rentData.ownerOfMachine).rentings.push(rentData);
        let values = {'myRents' : user.myRents};
        return values;



        currentUser.machines.id(machineData._id).description = machineData.description;
        currentUser.machines.id(machineData._id).price = machineData.price;
        currentUser.machines.id(machineData._id).img = machineData.img;
        currentUser.machines.id(machineData._id).machineName = machineData.machineName;
        currentUser.markModified('machines'); 
        currentUser.save();
        */
    }

    async AcceptRent(user, requestId){
        
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