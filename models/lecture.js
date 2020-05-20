const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lectureSchema = new Schema({
    lecture: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Lecture', lectureSchema);