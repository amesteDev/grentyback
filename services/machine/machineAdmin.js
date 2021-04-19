const userModel = require('../../models/user');


class MachineServ {

    async Add(machineData) {
        const user = machineData.userid;
        let currentUser = await userModel.findById(user);
        return currentUser.machines;
    }

    async Edit() {

    }

    async Delete() {

    }
    

}


module.exports = MachineServ;