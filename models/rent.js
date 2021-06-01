const mongoose = require('mongoose');

const RentSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: true
    },
    renter: {
        type: String,
        required: true
    },
    machine: {
        type: String,
        required: true
    },
    machineType: {
        type: String,
        required: true
    },
    acceptanceStatus: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    rating: {
        type: Number
    },
    comment: {
        type: String
    }
});

const Rent = mongoose.model("rent", RentSchema);
module.exports = Rent;