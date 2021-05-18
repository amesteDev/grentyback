const userModel = require('../../models/user');

class searchServ {
    async search(requestBody, user) {
        let searchResults = [];
        //machines.0 för att se om det finns något på index 0 i arrayen, så den bara returnerar användare som stämmer med kommun och har maskiner.
        //$ne = NOT.
        let usersFound = await userModel.find({ kommun: requestBody.kommun, '_id': { $ne: user }, 'machines.0': { $exists: true } }).exec();

        if (usersFound.length == 0) {
            return { err: 'no-users', msg: 'Inga maskiner funna i kommunen' };
        }

        for (const [index, user] of usersFound.entries()) {


            for (let i = 0; i < user.machines.length; i++) {
                let curMach = user.machines[i]
                let maskin = {};
                maskin.id = curMach._id;
                maskin.machineName = curMach.machineName;
                maskin.description = curMach.description;
                maskin.price = curMach.price;
                maskin.owner = user._id;
                maskin.name = user.name;
                maskin.adress = user.adress;
                maskin.zip = user.zip;
                maskin.city = user.city;
                maskin.lon = user.longitude;
                maskin.lat = user.latitude;
                searchResults.push(maskin);
            }

        }
        console.log(searchResults)
        return searchResults;
    }
}

module.exports = searchServ;