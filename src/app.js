const express = require('express');
const {adminAuth}=require("./auth.js")
const connectDB = require("./config/Database.js")
const User=require("./models/user.js")
const app = express();

app.post("/singup", async (req,res)=>{
    const userobj={
        firstName:"rani",
        lastName:"Raj",
        age:25,
        Email:"rani@gmail.com",
        password:"1234"
    }
    const user=new User(userobj);
    await user.save();
    res.send("data save successfully")
})





connectDB().then(()=>{
    console.log("database connected succesfully")
    app.listen(3333,()=>console.log("successfully accepted server"))
    
})
.catch(()=>{
    console.log("oops not able to connect database")
})


