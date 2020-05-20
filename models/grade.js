const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gradeSchema = new Schema({
    grade: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Grade', gradeSchema);