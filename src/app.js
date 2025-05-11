const express = require('express');
const {adminAuth}=require("./auth.js")
const connectDB = require("./config/Database.js")
const app = express();


connectDB().then(()=>{
    console.log("database connected succesfully")
    app.listen(3333,()=>console.log("successfully accepted server"))
    
})
.catch(()=>{
    console.log("oops not able to connect database")
})


