const userModel = require('../../models/user');

class profileServ {
    async fetch(user) {
        let User = await userModel.findById(user);
        Reflect.deleteProperty(User, 'password');
        return User;
    }


    async fetchOther(userId) {
        let userData = await userModel.findById(userId);
        Reflect.deleteProperty(userData, 'password');

        let userInfo = {
            'name': userData.name,
            'adress': userData.adress,
            'username': userData.username,
            'zip': userData.zip,
            'city': userData.city


        }
        return userInfo;
    }
}


module.exports = profileServ;