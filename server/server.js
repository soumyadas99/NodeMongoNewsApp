const express=require("express")
const cors=require('cors')
const app=express();
const router=require('./router/auth-router')
const adminRoute=require('./router/admin-router')
const {connectDb}=require('./utils/db')

const corsOptions={
    origin:'http://localhost:5173',
    methods:"PUT,GET,POST,PATCH,DELETE,HEAD",
    credentials:true
}
app.use(cors(corsOptions))
app.use(express.json())

app.use("/api/auth",router)
app.use("/api/admin",adminRoute)

// app.get("/",(req,res)=>{
//     res.status(200).send("welcom");

// })
// app.get("/register",(req,res)=>{
//     res.status(200).send("register page");

// })

connectDb().then(app.listen(5000))





