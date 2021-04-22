const jwt = require('jsonwebtoken');

class AccessServ {

    async CheckLoggedInUser() {
        //check that the JWT provided is real and valid
        jwt.verify(req.headers, process.env.PK, (err, verified) => {
            if(err){
                return err.message;
            } else {
                return verified;
            }
        })
    }

}


module.exports = AccessServ;