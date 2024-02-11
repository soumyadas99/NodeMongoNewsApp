const users=require('../models/user-model')
require('dotenv').config();
const News=require('../models/news-model')

const getAllUsers=async (req,res)=>
{
    try{

    const userDetails=await users.find();
    if(!users || users.length === 0)
    {
        return res.status(404).json({message:"No User Found"})
    }
    return res.status(200).json(userDetails)
    
    }
    catch(error)
    {
        return res.status(404).json({messgae:"error found while fetching getAllUsers"})
    }
    
}
const addNews=async (req,res)=>{
    
    const {headline,date,location,content}=req.body
    const newsBody=await News.create({headline,date,location,content});
    
    try{
        return res.status(200).json({message:newsBody })
    }
    catch(error)
    {
        console.log("error in addNews in admin-controller");
    }

}
const getAllNews=async (req,res)=>{
    try{

        const userDetails=await News.find();
        if(!userDetails || userDetails.length === 0)
        {
            return res.status(404).json({message:"No news found"})
        }
        return res.status(200).json(userDetails)
        
        }
        catch(error)
        {
            return res.status(404).json({messgae:"error found while fetching getAllNews"})
        }
}

module.exports={getAllUsers,addNews,getAllNews}