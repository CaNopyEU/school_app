const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const homeworkSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    finishAt: {
        type: Date,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Homework', homeworkSchema);