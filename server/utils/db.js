const mongoose= require('mongoose');

const uri='mongodb://localhost:27017/node';

const connectDb=async ()=>{

    try{
       await  mongoose.connect(uri);
       console.log("connection succesfull to database");
        }
    catch(error)
    {
        console.log(error);
        console.log("connection not success full");
    }
};

module.exports= {connectDb} ;
