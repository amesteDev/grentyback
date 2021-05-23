const express = require("express");
const router = express.Router();
const profileServ = require("../services/user/profile");
const AccessServ = require("../middleware/authreq");

const profserv = new profileServ();
const accesserv = new AccessServ();

router.get('/fetchMy', accesserv.CheckLoggedInUser, async (req, res, next) => {
    console.log('kram')
    let userData = await profserv.fetch(req.user);
    res.send(userData);
})


module.exports = router;