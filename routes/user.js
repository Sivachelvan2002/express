const express = require('express');
const { getuser } = require('../controllers/usercontroller');
const route = express.Router();


route.get('/getUser', getuser);

route.put('/updateuser',(req,res,next)=>{
    res.status(200).json({message:"User updated successfully"})
})
module.exports=route