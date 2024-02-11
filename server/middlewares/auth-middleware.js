const jwt=require('jsonwebtoken')
const User=require('../models/user-model')

const authMiddleware=async(req,res,next)=>{
    const token=req.header('Authorization');
    if(!token)
    {
        return res.status(401).json({msg:"Unauthorized"})
    }
    const str =token;
    const parts = str.split(" "); // Splitting the string by comma
    const secondString = parts[1].trim();
    //console.log("token from auth-middleware ",secondString)
    try{
        const isVerified=jwt.verify(secondString,process.env.JWT_SECRET_KEY)
        //console.log("After verification",isVerified)
        const userData=await User.findOne({email:isVerified.email}).select({password:0})
        req.user=userData;
        req.token=token;
        req.userId=userData._id;
        //console.log(userData)
        next();
    }
    catch(error)
    {
        return res.status(401).json({msg:"Unauthorized ,Token invalid"})
    }


}
module.exports=authMiddleware;