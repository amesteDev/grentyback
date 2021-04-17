//authenticate users
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../../models/user');
const sendMail = require('../helpers/sendmail');
class AuthServ {

    async Register(userData) {
        try {
            //kolla så inte e-post finns reggad redan må fixa så den kommer åt email bara
            const isAlreadyRegged = await this.userModel.findone({ userData });
            if (isAlreadyRegged) {
                throw new Error('User already registered')
            }

            //now actually perform the registerprocess
            const saltRounds = 20;
            const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
            const userRecord = await this.userModel.create({
                ...userData,
                password: hashedPassword,
            });
            const token = this.generateToken(userRecord);

            if (!userRecord) {
                throw new Error('User cannot be created');
            }
            const sendmail = new sendMail();
            await this.sendmail.WelcomeMail(userRecord);

            const user = userRecord.toObject();
            Reflect.deleteProperty(user, 'password');
            Reflect.deleteProperty(user, 'salt');
            return { user, token };
        } catch (e) {
            throw e;
        }
    }

    async Login(email, password) {
        const userRecord = await this.userModel.findOne({ email });
        if (!userRecord) {
            throw new Error('User not registered');
        }

        const validPassword = await bcrypt.compare(userRecord.password, password);
        if (validPassword) {
            this.logger.silly('Password is valid!');
            this.logger.silly('Generating JWT');
            const token = this.generateToken(userRecord);

            const user = userRecord.toObject();
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty
            Reflect.deleteProperty(user, 'password');
            Reflect.deleteProperty(user, 'salt');

            return { user, token };
        } else {
            throw new Error('Invalid Password');
        }
    }

    #generateToken() {
        const today = new Date();
        const exp = new Date(today);
        exp.setDate(today.getDate() + 60);

        return jwt.sign(
            {
                _id: user._id,
                name: user.username,
                exp: exp.getTime() / 1000,
            },
            process.env.PK
        );
    }
}

module.exports = AuthServ;