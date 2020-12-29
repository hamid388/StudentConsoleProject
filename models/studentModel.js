const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: String,
    roll_no: { type: String , lowercase: true, unique:true},
    section: String,
    cgpa: Number
});

const studentModel  = mongoose.model("student",studentSchema);

module.exports = studentModel;