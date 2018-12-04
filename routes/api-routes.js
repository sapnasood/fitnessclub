const moment = require("moment");
const express = require("express");
const path = require("path");

//Import in our db models
const db = require('../models');

const router = express.Router(); 


// Create user account
router.post("/api/create",function(req, res){
// Check if user already exists in DB 
console.log(req.body.email);
db.UserAcct.findOne({email:req.body.email}).then(function(data){
  console.log(data);
// Send alreay exists message if user is in DB
  if(data){
  data = 'User already exists';
  res.json(data);
 }
//Create a user in DB
 else{
     db.UserAcct.create(req.body).then(function(data){
       res.json({success: true});
      }).catch(function(error){
        res.json({error: error});
     })
 }
  
}).catch(function(error){
  console.log(error)
  res.json({error: error});
 
})

    }) 
  

        router.post("/api/signin",function(req, res){
          console.log(req.body);
          db.UserAcct.findOne({email:req.body.email}).then(function(data){
            res.json(data);
          }).catch(function(error){
            res.json({error: error});
     
          })

          })  
          
router.put("/api/checkin" , function(req, res){
  console.log('request',req.body);
  db.UserAcct.findOne({email:req.body.email}).then(function(data){
    console.log('findOne', data.checkindate);
// Send message if user is already checked in for a day    
    if (data.checkindate == moment().format("MMMM Do YYYY")){
       data = 'You are already Checked-In for today'
       console.log('already checked in',data);
       res.json(data);
      
    }
    else{
// Check in user for the day
req.body.checkindate = moment().format("MMMM Do YYYY"); 
      console.log(req.body.chekins);
      db.UserAcct.updateOne({email:req.body.email}, {checkindate:req.body.checkindate, chekins:req.body.chekins}).then(function(data){
       console.log('updated date', data)
        res.json(data);
      }).catch(function(error){
        res.json({error:error});
      })
    }
  }).catch(function(error){})
})          

// Update user profile
router.put("/api/userprofile", function(req, res){
  console.log(req.body);
  db.UserAcct.updateOne({email:req.body.email}, {fname:req.body.fname, lname:req.body.lname, 
    email:req.body.email, password:req.body.password}).then(function(data){
    console.log('updated profile', data)
     res.json(data);
   }).catch(function(error){
     res.json({error:error});
   })  

})
        module.exports = router;