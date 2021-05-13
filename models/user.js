const mongoose = require('mongoose');
const MachineSchema = require('./machine').schema;

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    lan: {
        type: String,
        required: true
    },
    kommun: {
        type: String,
        required: true
    },
    myRents: [],
    machines: [MachineSchema],
    ratings: {
        type: Array
    }
}, {
    collection: 'users'
});

const User = mongoose.model("user", UserSchema);
module.exports = User;