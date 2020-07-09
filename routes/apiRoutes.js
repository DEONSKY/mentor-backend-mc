const express = require("express");
const router = express.Router();
const db = require("../models");

//get all todos
router.get("/all",(req,res)=>{
    db.user.findAll().then(user=>res.send(user));
});
//get single todo with id
router.get("/find/:id",(req,res)=>{
    db.user.findAll({
        where:{
            id:req.params.id
        }
    }).then(user=>res.send(user))
    .catch(function (err) {console.log(err)});
});

//post new todo
router.post('/new',(req,res)=>{
    db.user.create({
        username: req.body.username,
        email: req.body.email,
        name: req.body.name,
        password_salt: req.body.password_salt,
        password_hash: req.body.password_hash
    }).then(submittedUser=>res.send(submittedUser))
    .catch(function (err) {console.log(err)});
});

//delete todo
router.delete("/delete/:id",(req,res)=>{
    db.user.destroy({
        where:{
            id: req.params.id
        }
    }).then(()=>res.send("succes"))
    .catch(function (err) {console.log(err)});
});

//edit a todo
router.put('/edit',(req,res)=>{
    db.user.update(
        {
            password_salt:req.body.password_salt
        },
        {
            where:{id:req.body.id}
        }
    ).then(()=>res.send("success"))
    .catch(function (err) {console.log(err)});
})

module.exports= router;