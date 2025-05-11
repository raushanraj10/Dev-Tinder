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

app.get("/user",async (req,res)=>{
    const useremail=req.body.Email;
    // const userdata=await User.findOne({Email:useremail})
     const userdata=await User.find({Email:useremail})
    console.log(userdata)
    res.send(userdata)
})

app.get("/feed",async (req,res)=>{
    // const useremail=req.body.Email;
    const userdata=await User.find({})
    console.log(userdata)
    res.send(userdata)
})

app.delete("/user",async (req, res)=>{
    const userid=req.body.userid;
    
    try{
        await User.findByIdAndDelete(userid)
        res.send("deleted")
    }
    catch(err)
    {
        res.status(400).send("data deleted")
    }
})


app.patch("/user",async (req,res)=>{
    const userid=req.body.userid;
    const data =req.body;

    try{
        const updatedbefore= await User.findByIdAndUpdate({_id:userid},data,{returnDocument:"before"})
        console.log(updatedbefore)
        res.send("updated")
    }
    catch{
        res.send("something went wrong")
    }

})




connectDB().then(()=>{
    console.log("database connected succesfully")
    app.listen(3333,()=>console.log("successfully accepted server"))
    
})
.catch(()=>{
    console.log("oops not able to connect database")
})


