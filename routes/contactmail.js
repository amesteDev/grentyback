const express = require("express");
const router = express.Router();
const sendMail = require('../services/helpers/sendmail');

router.post('/', async (req, res, next) => {
    const sendmail = new sendMail();
    await sendmail.ContactMail(req.body);
    //beroendepĂ„ svar skicka svar
    
})

module.exports = router; 