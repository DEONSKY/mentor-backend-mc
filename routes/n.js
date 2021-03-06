const express = require("express");
const router = express.Router();
const db = require("../models");

//get all todos
router.get("/all",(req,res)=>{
    db.Todo.findAll().then(todos=>res.send(todos));
});

// post new Todo
router.post("/new",(req,res)=>{
    db.Todo.create({
        text:req.body.text
    }).then(submittedTodo=>res.send(submittedTodo)).catch(function(err){console.log(err);});
});

module.exports= router;