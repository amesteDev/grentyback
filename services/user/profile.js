const userModel = require('../../models/user');

class profileServ {
    async fetch(user) {
        let currentUser = await userModel.findById(user._id);
        Reflect.deleteProperty(currentUser, 'password');
        return currentUser;
    }
}


module.exports = profileServ;