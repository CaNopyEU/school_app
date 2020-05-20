const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const classSchema = new Schema({
    class: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    schedule: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Class', classSchema);