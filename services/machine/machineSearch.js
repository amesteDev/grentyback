const userModel = require('../../models/user');

class searchServ {
    async search(requestBody, user) {
        let searchResults = [];
        //machines.0 för att se om det finns något på index 0 i arrayen, så den bara returnerar användare som stämmer med kommun och har maskiner.
        //$ne = NOT.
        let usersFound = await userModel.find({ kommun: requestBody.kommun, '_id': {$ne: user}, 'machines.0': { $exists: true } }).exec();
        
        if (usersFound.length == 0) {
            return { err: 'no-users', msg: 'Inga maskiner funna i kommunen' };
        }
      
        for(const [index, user] of usersFound.entries()){
            let owner = {'_id': user._id};
            owner.name = user.name;
            owner.adress = user.adress;
            owner.zip = user.zip;
            owner.city = user.city;
            owner.machines = user.machines;
            searchResults.push(owner);
        }       
        return searchResults;
    }
}

module.exports = searchServ;