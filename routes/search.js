const express = require("express");
const router = express.Router();
const SearchServ  = require("../services/machine/machineSearch");

const searchserv = new SearchServ();
router.post('/', async (req, res, next) => {
    //hämta en användares alla maskiner
    let machines = await searchserv.search(req.body);
    res.send(machines);
})

module.exports = router; 