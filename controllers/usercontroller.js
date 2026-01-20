exports.getuser=(req,res,next)=>{
    res.status(200).json({ message: "User data retrieved successfully" });
}
