const { model } = require("./models/studentModel");
const studentModel = require("./models/studentModel");
const createStudent = async( name, roll_no, section, cgpa)=>{
    console.log("Create Student");
    let student = new studentModel();
    student.name = name;
    student.roll_no = roll_no;
    student.section = section;
    student.cgpa = cgpa;
    await student.save();
    return student;
}
const getAllStudents =  async () => {
    let students = await studentModel.find();
    return students;
}
const deleteStudent =  async (_id) => {
    let student = await studentModel.findByIdAndDelete(_id);
    return student;
}
const updateStudent = async( _id,name, roll_no, section, cgpa)=>{
    let student = await studentModel.findById(_id);
    student.name = name;
    student.roll_no = roll_no;
    student.section = section;
    student.cgpa = cgpa;
    await student.save();
    return student;
}
module.exports.createStudent = createStudent;
module.exports.getAllStudents = getAllStudents;
module.exports.deleteStudent = deleteStudent;
module.exports.updateStudent = updateStudent;