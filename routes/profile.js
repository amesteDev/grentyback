const express = require("express");
const router = express.Router();
const profileServ = require("../services/user/profile");
const AccessServ = require("../middleware/authreq");

const profserv = new profileServ();
const accesserv = new AccessServ();

router.get('/fetchMy', accesserv.CheckLoggedInUser, async (req, res, next) => {
    let userData = await profserv.fetch(req.user._id);
    res.send(userData);
})

router.get('/fetchOther/:id', accesserv.CheckLoggedInUser, async (req, res, next) => {
    let userData = await profserv.fetchOther(req.params.id);
    res.send(userData);
})

module.exports = router;