const express = require('express');
const router = express.Router();
const Users = require('../model/data');


//get data from db
router.get('/users',function(req,res){
    Users.find().then(function(data){
        res.send(data);
    });
 });

 //add data to db
router.post('/users',function(req,res,next){
    Users.create(req.body).then(function(data){
        res.send(data);

    }).catch(next);//this catch is a middleware for error handling
});

//update data to db
router.put('/users/:id',function(req,res,next){
    Users.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        Users.findOne({_id:req.params.id}).then(function(data){
            res.send(data);
        });    
    });
});

//delete data from db
router.delete('/users/:id',function(req,res){
    Users.findByIdAndDelete({_id:req.params.id}).then(function(data){
        res.send(data);
    })
});

module.exports = router;