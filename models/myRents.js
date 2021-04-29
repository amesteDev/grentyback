const mongoose = require('mongoose');

const myRentSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: true
    },
    machine: {
        type: String,
        required: true
    },
    date: {
        Type: Date
    },
    status: {
        Type: String
    },
    rating:{
        Type: Number
    },
    comment: {
        Type: String
    }
});

const myRents = mongoose.model("myRents", myRentSchema);
module.exports = myRents;