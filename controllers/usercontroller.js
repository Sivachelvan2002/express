const { usermodel } = require("../schema/userschema")

exports.getuser=async(req,res,next)=>{
    const {name,email,address,telephone}=req.body;
    try{
        await usermodel.create({
            name:name,
            email:email,
            address:address,
            telephone:telephone
        })
        console.log("user created successfully");
    }
    catch(err){
        console.error("error",err.message);
    }

    
}
