const express = require("express");
const router = express.Router();
const authed = require("../middleware/authreq");

router.post('/request/send', authed.CheckLoggedInUser, async (req, res, next) => {
    //skicka förfrågan om att hyra
})

router.post('/request/answer', authed.CheckLoggedInUser, async (req, res, next) => {
    //skicka svaret på en förfrågan
})

router.put('/complete', authed.CheckLoggedInUser, async (req, res, next) => {
    //markera en uthyrning som slutförd och betald
})

router.post('/ref', authed.CheckLoggedInUser, async (req, res, next) => {
    //ge betyg på den man hyrt av eller den man hyrt ut till
})

module.exports = router;