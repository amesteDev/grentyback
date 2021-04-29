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
    date: {
        Type: Date
    },
    rating: {
        Type: Number
    },
    comment: {
        Type: String
    }
});

const Rent = mongoose.model("rent", RentSchema);
module.exports = Rent;