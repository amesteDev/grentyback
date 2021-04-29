const userModel = require('../../models/user');s

class RentServ {

    async RequestRent(user, ownerOfMachine, machine) {
        //må registrera som ett rent-schema för aktuell maskin, vilket innebär att jag behöver skicka med vilken maskin det gäller?
        //kan göra det i body såklart.
        //det som behövs är då maskinens ägare, vilken maskin och vem som ska hyra den, vilket/vilka datum. sen hämtas priset från maskinen.
        let currentUser = await userModel.findById(user._id);
        if(!currentUser){
            throw new Error('Bad user');
        }
        let owner = await userModel.findById(ownerOfMachine);
        if(!owner){
            throw new Error('Bad owner');
        }



    }

    async AcceptRent(user, requestId){
    
    }

    async DeclineRent(){

    }

    async CompleteRent() {

    }

}

module.exports = RentServ;