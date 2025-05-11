const express = require('express');
const {adminAuth}=require("./auth.js")
const connectDB = require("./config/Database.js")
const User=require("./models/user.js")
const app = express();

app.use(express.json());


app.post("/singup", async (req,res)=>{
    
    // const userobj={
    //     firstName:"rani",
    //     lastName:"Raj",
    //     age:25,
    //     Email:"rani@gmail.com",
    //     password:"1234"
    // }
    // const user=new User(userobj);
    // await user.save();


    const user=new User(req.body)

    try{
        await user.save()
        res.send("data saved")
    }catch(err){
        res.status(400).send("error,not able to save")
    }
})





connectDB().then(()=>{
    console.log("database connected succesfully")
    app.listen(3333,()=>console.log("successfully accepted server"))
    
})
.catch(()=>{
    console.log("oops not able to connect database")
})


