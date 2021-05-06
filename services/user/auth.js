//authenticate users
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../../models/user');
const sendMail = require('../helpers/sendmail');
const Token = require('../../models/token');
const User = require('../../models/user');

class AuthServ {
    async Register(userData) {
        try {
            //kolla så inte e-post finns reggad redan må fixa så den kommer åt email bara
            let email = userData.email;
            const isAlreadyRegged = await userModel.findOne({ email });
            if (isAlreadyRegged) {
                throw new Error('User already registered')
            }

            //now actually perform the registerprocess
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

            const userRecord = await userModel.create({
                ...userData,
                password: hashedPassword,
            });

            const token = new Token({ _userId: userRecord._id, token: this.generateToken(userRecord) });
            token.save((err) => {
                if (err) { return res.status(500).send({ msg: err.message }); }
            })

            if (!userRecord) {
                throw new Error('User cannot be created');
            }

            const sendmail = new sendMail();
            await sendmail.WelcomeMail(userRecord.email, token.token);

            const user = userRecord.toObject();
            Reflect.deleteProperty(user, 'password');
            return { user };
        } catch (e) {
            throw e;
        }
    }

    async Login(email, password) {
        const userRecord = await userModel.findOne({ email });
        if (!userRecord) {
            throw new Error('User not registered');
        }
        if (!userRecord.isVerified) {
            throw new Error('User not verified');
        }

        const validPassword = await bcrypt.compare(password, userRecord.password);

        if (validPassword) {
            const token = this.generateToken(userRecord);
            const user = userRecord.toObject();
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty
            Reflect.deleteProperty(user, 'password');

            return { user, token };
        } else {
            throw new Error('Invalid Password');
        }
    }

    async Activate(activationToken) {
        const token = await Token.findOne({ token: activationToken });
      
        if (!token) return { type: 'not-verified', msg: 'We were unable to find a valid token. Your token my have expired.' };
        const user = await User.findOne({ _id: token._userId });
    
        if (!user) return { msg: 'We were unable to find a user for this token.' };
        if (user.isVerified) return { type: 'already-verified', msg: 'This user has already been verified.' };

        user.isVerified = true;
        user.markModified('machines');
        user.save();
        return { msg: "The account has been verified. Please log in." };
    }

    async ResendToken(user) {
        const userRecord = await User.findOne({ email: user.email });
        if(!user) return {msg: 'No user found'};

        const token = new Token({ _userId: userRecord._id, token: this.generateToken(userRecord) });
        token.save((err) => {
            if (err) { return res.status(500).send({ msg: err.message }); }
        })

        const sendmail = new sendMail();
        await sendmail.WelcomeMail(user.email, token.token);
    }


    generateToken(user) {
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