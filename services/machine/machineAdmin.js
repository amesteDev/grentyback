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

    async Update(id, machineData) {
        let currentUser = await userModel.findById(id);
        if(!currentUser){
            throw new Error('Bad user');
        }
        currentUser.machines.id(machineData._id).description = machineData.description;
        currentUser.machines.id(machineData._id).price = machineData.price;
        currentUser.machines.id(machineData._id).img = machineData.img;
        currentUser.machines.id(machineData._id).name = machineData.name;
        currentUser.markModified('machines'); 
        currentUser.save();
        return currentUser;
    }

    async Delete(id, machineData) {
        let currentUser = await userModel.findById(id);
        if(!currentUser){
            throw new Error('Bad user');
        }
        currentUser.machines.id(machineData._id).remove();
        currentUser.markModified('machines'); 
        currentUser.save();
        return currentUser;
    }

    async Get() {

    }

    async GetOneMachine(id) {
        
    }

}

module.exports = MachineServ;