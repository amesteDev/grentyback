const express = require("express");
const router = express.Router();
const AccessServ = require("../middleware/authreq");

const accesserv = new AccessServ();

router.post('/request/send', accesserv.CheckLoggedInUser, async (req, res, next) => {
    //skicka förfrågan om att hyra
})

router.post('/request/answer', accesserv.CheckLoggedInUser, async (req, res, next) => {
    //skicka svaret på en förfrågan
})

router.put('/complete', accesserv.CheckLoggedInUser, async (req, res, next) => {
    //markera en uthyrning som slutförd och betald
})

router.post('/ref', accesserv.CheckLoggedInUser, async (req, res, next) => {
    //ge betyg på den man hyrt av eller den man hyrt ut till
})

module.exports = router;