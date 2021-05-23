//https://www.w3schools.com/nodejs/nodejs_email.asp
//https://nodemailer.com/smtp/
const nodemailer = require('nodemailer');

class mailSender {
    transporter = nodemailer.createTransport({
        host: 'ns10.inleed.net',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAILPW
        }
    });

    async WelcomeMail(email, token) {
        const textToSend = `Hej och välkommen till Grenty! För att aktivera ditt konto och börja använda tjänsten behöver du klicka på länken här nedanför: 
        https://grenty.se/user/activate/${token}

        Vänligen
        Teamet på grenty.se
        `
        const mailOptions = {
            from: 'no-reply@grenty.se',
            to: email,
            subject: 'Välkommen till grenty.se',
            text: textToSend
        }

        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return error
            } else {
                return 'Email sent: ' + info.response
            }
        })
    }

    async ContactMail(contactFormData) {
        const msg = contactFormData.msg;

        const mailOptions = {
            from: contactFormData.email,
            to: 'info@grenty.se',
            subject: 'Kontaktformulär på grenty.se',
            text: msg
        }

        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
            } else {
                console.log('Email sent: ' + info.response)
            }
        })
    }

    async newRequest(owner) {
        const msg = 'Du har en ny förfrågan om att hyra en maskin, logga in på grenty.se för att tacka ja eller nej';

        const mailOptions = {
            from: 'rent@grenty.se',
            to: owner.username,
            subject: 'Hyresförfrågan',
            text: msg
        }

        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
            } else {
                console.log('Email sent: ' + info.response)
            }
        })
    }


    async acceptedRent(renter) {
        const msg = 'Du har en accepterad hyresförfrågan, logga in på grenty.se för att se mer detaljer';

        const mailOptions = {
            from: 'rent@grenty.se',
            to: renter.username,
            subject: 'Svar på hyresförfrågan',
            text: msg
        }

        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
            } else {
                console.log('Email sent: ' + info.response)
            }
        })
    }

    async declineRent(renter) {
        const msg = 'Ägaren av maskinen har tackat nej till din hyresförfrågan, logga in på grenty.se för att se mer detaljer';

        const mailOptions = {
            from: 'rent@grenty.se',
            to: renter.username,
            subject: 'Svar på hyresförfrågan',
            text: msg
        }

        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
            } else {
                console.log('Email sent: ' + info.response)
            }
        })
    }




}

module.exports = mailSender;