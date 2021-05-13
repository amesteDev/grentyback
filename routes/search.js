const express = require("express");
const router = express.Router();
const AccessServ = require("../middleware/authreq");
const SearchServ  = require("../services/machine/machineSearch");

const searchserv = new SearchServ();
const accesserv = new AccessServ();

router.post('/', accesserv.CheckLoggedInUser, async (req, res, next) => {
    let machines = await searchserv.search(req.body, req.user);
    res.send(machines);
})

module.exports = router; 