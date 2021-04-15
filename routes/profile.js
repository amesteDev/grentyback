const express = require("express");
const router = express.Router();
const userModel = require("../Models/user");

//skicka ut info om en enksild profil



//uppdatera min profil
router.get('/fetch/:id', async (req, res) => {
    let userProfile = await courseModel.findOne({ subject: req.params.subj });
    if (!userProfile) {
        return res.status(400).send('Nothing found');
    }
    res.send(userProfile);
})



module.exports = router;