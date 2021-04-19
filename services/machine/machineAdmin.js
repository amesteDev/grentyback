const userModel = require('../../models/user');


class MachineServ {

    async Add(machineData) {
        const user = machineData.userid;
        let currentUser = await userModel.findById(user);
        if(!currentUser){
            throw new Error('Bad user');
        }
        currentUser.machines.push(machineData);
        currentUser.markModified('machines');
        currentUser.save();
        return currentUser;
    }

    async Edit() {

    }

    async Delete() {

    }

}


module.exports = MachineServ;