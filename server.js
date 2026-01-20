const express = require("express");
const app = express();
const userroute = require('./routes/user');

app.use(express.json());
app.use(userroute)
// app.post('/',(req, res, next) => {
//     // res.status(200).json({message:"hello"})
//     console.log(req.body)
//     // next();
// }) 
// app.use('/',(req, res, next) => {
//     // res.status(200).json({message:"hello"})
//     console.log("second middleware")
// }) 


app.listen(4000, () => {
    console.log("server is listening")
}) 
