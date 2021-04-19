const mongoose = require('mongoose');
const MachineSchema = require('./machine');

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
    machines: [MachineSchema],
    username: {
        type: String
    }
}, {
    collection: 'users'
});


const User = mongoose.model("user", UserSchema);
module.exports = User;