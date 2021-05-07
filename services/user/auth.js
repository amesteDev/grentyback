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
        if (!userRecord) return { err: 'no-user', msg: 'Ingen användare hittat med den e-postadressen'};
        if (!userRecord.isVerified) return { err: 'not-verified', msg: 'Användaren är inte aktiverad, kolla din e-post efter aktiveringslänken.' };

        const validPassword = await bcrypt.compare(password, userRecord.password);

        if (validPassword) {
            const token = this.generateToken(userRecord);
            const user = userRecord.toObject();
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty
            Reflect.deleteProperty(user, 'password');

            return { user, token };
        } else {
            return { err: 'password', msg: 'Fel lösenord.'};
        }
    }

    async Activate(activationToken) {
        const token = await Token.findOne({ token: activationToken });
      
        if (!token) return { err: 'no-token', msg: 'Aktiveringslänken verkar ha gått ut.' };
        const user = await User.findOne({ _id: token._userId });
    
        if (!user) return { err: 'no-user', msg: 'Ingen användare hittad som matchar.' };
        if (user.isVerified) return { err: 'verified', msg: 'Användaren är redan aktiverad.' };

        user.isVerified = true;
        user.markModified('machines');
        user.save();
        return { msg: "Användaren är nu verifierad, prova att logga in." };
    }

    async ResendToken(user) {
        const userRecord = await User.findOne({ email: user });
        if(!user) return {err: 'no-user', msg: 'Ingen användare med den e-postadressen finns registrerad'};
        if(user.isVerified === true) return {err: 'verified', msg: 'Användaren är redan verifierad, prova att logga in.'}
        const token = new Token({ _userId: userRecord._id, token: this.generateToken(userRecord) });
        token.save((err) => {
            if (err) { return res.status(500).send({ msg: err.message }); }
        })

        const sendmail = new sendMail();
        await sendmail.WelcomeMail(user, token.token);
        return {msg: 'Ny länk skickad, kolla din e-post om några minuter.'};
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