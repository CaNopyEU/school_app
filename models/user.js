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
/*    date: {
        type: Date,
        required: true
    },*/
    privilege: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    /*
    additional informations
    class: {
        type: String,
        required: false
    },
    year: {
        type: Number,
        required: false
    },
    parentName: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    street: {
        type: String,
        required: false
    },
    number: {
        type: Number,
        required: false
    },*/
    createdEvents: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Event'
        }
    ]
});

module.exports = mongoose.model('User', userSchema);