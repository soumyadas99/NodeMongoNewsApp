const User=require('../models/user-model')
require('dotenv').config();

const home=async (req,res)=>{

    try{
        res.status(200).send("welcome to controller ");
    }
    catch(error)
    {
        console.log("error from");
    }

}
//user cont for the browser to get the user details from the server
const user =async (req,res)=>{

    try{
        const userData= await req.user;
        console.log(userData)
         return res.status(200).json({msg:userData})

    }
    catch(error)
    {
        console.log('error from thr user route');
    }

}


const login=async (req,res)=>{

    try{
        
        const {email,password}=req.body;
        const userExists=await User.findOne({email});
        if(!userExists)
        {
            return res.status(400).json({message:"invalid credentials"})
        }
        if(userExists.password==password)
        {
            res.status(200).json( { message : "Login successful", 
            token: await userExists.generateToken(),userId:userExists._id.toString()});
        }
        else{
            return res.status(401).json({message:"enter the correct password"})
        }
    }
    catch(error)
    {
        console.log(error);
    }

}




const register=async (req,res)=>{

    const {username,email,password}=req.body
    const userExists=await User.findOne({email});

    if(userExists)
    return res.status(400).json({msg:"email already exists"})
    
    const userCreated=await User.create({username,email,password});

    try{
        res.status(201).json( { message : "registration successful", 
        token: await userCreated.generateToken(),userId:userCreated._id.toString()});
    }
    catch(error)
    {
        console.log(error);
    }

}

module.exports={home,register,login,user}