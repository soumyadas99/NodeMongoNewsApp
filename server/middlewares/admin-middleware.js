const jwt=require('jsonwebtoken')


const adminMiddleware=async(req,res,next)=>{
    
    try{
        const adminRole=req.user.isAdmin
        if(!adminRole)
        {
            return res.status(403).json({message:"User Does not have admin auhtorization"})
        }
        next();
    }
    catch(error)
    {
        next(error);
    }

}
module.exports=adminMiddleware;