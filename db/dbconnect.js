const { error } = require('console');
const mongoose = require('mongoose');

exports.connectdb=()=>{
    mongoose.connect("mongodb://localhost:27017/userdb").then(()=>{
        console.log("database connetced successfully")
    }).catch((err)=>{
        console.error("err",err.message)
    })
}