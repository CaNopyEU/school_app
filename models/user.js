const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    first: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    privilege: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: false
    },
    date: {
        type: Date,
        required: false
    },
    additionalData: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('User', userSchema);