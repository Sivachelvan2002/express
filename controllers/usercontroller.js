const { usermodel } = require("../schema/userschema")

exports.getuser=async(req,res,next)=>{
    const {name,email}=req.body;
    try{
        await usermodel.create({
            name:name,
            email:email
        })
        console.log("user created successfully");
    }
    catch(err){
        console.error("error",err.message);
    }

    
}
