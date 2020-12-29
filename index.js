const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {createStudent , getAllStudents, deleteStudent, updateStudent} = require('./studentsOperations');
app.use(express.json());

mongoose.connect("mongodb://localhost/firstTry",{ useNewUrlParser: true ,useUnifiedTopology: true}).then(async ()=>{
    console.log("connection create");
    // let student = await createStudent("ahsan","sp18-bcs-110",'B',2.7);
    // console.log(student);
    // let allStudents = await getAllStudents();
    // console.log(allStudents);
    // console.log(await deleteStudent("5fe79d0c7a361a22b45b9f42"));
    let updatedStudent = await updateStudent("5fe7a041891a1d330ca9bee8","Abdullah","sp18-bcs-026","B",3.3);
    console.log(updatedStudent);
}).catch(err=>{
    console.log("Error in Connection");
    console.log(err);
});






// app.get("/",function(req,res){
//     res.send("wellcome to my API");
// });

// app.get("/api/students",function(req,res){
//     res.send(students);
// });

// app.get("/api/students/:index",function(req,res){
//     if(!students.find(s => s.id == req.params.index)) return res.status(400).send("Invalid Id");
//     res.send(students.find(s => s.id == req.params.index).name);
// });

// app.put("/api/students/:index",function(req,res){
//     if(!students.find(s => s.id == req.params.index)) return res.status(400).send("Invalid Id");
//     students.find(s => s.id == req.params.index).name = req.body.name;
//     res.send(students.find(s => s.id == req.params.index).name);
// });

// app.delete("/api/students/:index",function(req,res){
//     if(!students.find(s => s.id == req.params.index)) return res.status(400).send("Invalid Id");
//     students.splice(students.indexOf(students.find(s => s.id == req.params.index)), 1);
//     res.send(students);
// });

// app.post("/api/students",function(req,res){
//     var newE = {
//         "id": students[students.length-1].id + 1,
//         "name": req.body.name
//     }
//     students.push(newE);
//     res.send(students);
// });



app.listen(3000);