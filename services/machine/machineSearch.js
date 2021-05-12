const userModel = require('../../models/user');

class searchServ {
    async search(requestBody) {
        let searchResults = {};
        //machines.1 för att se om det finns något på index 0 i arrayen, så den bara returnerar användare som stämmer med kommun och har maskiner.
        let usersFound = await userModel.find({ kommun: requestBody.kommun, 'machines.0': { $exists: true } }).exec();

        if (usersFound.length == 0) {
            return { 'msg': 'no users found' };
        }
      
        for(const [index, user] of usersFound.entries()){
            let owner = {'_id': user._id};
            owner.name = user.name;
            owner.adress = user.adress;
            owner.zip = user.zip;
            owner.city = user.city;
            owner.machines = user.machines;
            let title = 'user' + index;
            searchResults[title] = owner;
        }
        //hur ska jag lösa det här?
        //måste hämta alla användare där kommun stämmer med det som kommer?
       
        return searchResults;
    }
}

module.exports = searchServ;