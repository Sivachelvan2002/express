const { default: mongoose } = require('mongoose');
const mangoose=require('mongoose');

const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }})

exports.usermodel=mongoose.model('User',userschema);
