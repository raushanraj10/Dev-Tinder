const express = require('express');
const {adminAuth}=require("./auth.js")
const app = express();

app.use("/admin",adminAuth)

app.get("/admin/getdata",(req,res)=>{
    res.send("getting all data")
})

app.get("/admin/delete",(req,res)=>{
    // throw ("sdfoioi")
    // throw new Error("isdhf")
    res.send("deleting data")
})

app.use("/",(err,req,res,next)=>{
    if(err)
        res.status(500).send("something went wrong")
})


app.listen(3333,()=>console.log("successfully accepted server"))
