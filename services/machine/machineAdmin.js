const userModel = require('../../models/user');

class MachineServ {

    async Add(user, machineData) {
        let currentUser = await userModel.findById(user._id);
        if (!currentUser) {
            throw new Error('Bad user');
        }
        currentUser.machines.push(machineData);
        currentUser.markModified('machines');
        currentUser.save();
        return currentUser;
    }

    async Update(user, machineData) {
        let currentUser = await userModel.findById(user._id);
        if (!currentUser) {
            throw new Error('Bad user');
        }
        currentUser.machines.id(machineData._id).description = machineData.description;
        currentUser.machines.id(machineData._id).price = machineData.price;
        currentUser.machines.id(machineData._id).img = machineData.img;
        currentUser.machines.id(machineData._id).machineName = machineData.machineName;
        currentUser.markModified('machines');
        currentUser.save();
        return currentUser;
    }

    async Delete(user, machineData) {
        let currentUser = await userModel.findById(user._id);
        if (!currentUser) {
            throw new Error('Bad user');
        }
        currentUser.machines.id(machineData._id).remove();
        currentUser.markModified('machines');
        currentUser.save();
        return currentUser;
    }

    async GetMyMachine(user) {
        let currentUser = await userModel.findById(user._id);
        if (!currentUser) {
            throw new Error('Bad user');
        }
        return currentUser.machines;
    }

    async GetOneMachine(user, machineId) {
        let currentUser = await userModel.findById(user);
        if (!currentUser) {
            throw new Error('Bad user');
        }
        return currentUser.machines.id(machineId);
    }

    async GetOtherMachine(user, machine) {
        let currentUser = await userModel.findById(user);
        if (!currentUser) {
            throw new Error('Bad user');
        }
        return {'owner': user, 'machine': currentUser.machines.id(machine)}
    }

    async GetOtherMachineSpecific(id) {

    }
}

module.exports = MachineServ;