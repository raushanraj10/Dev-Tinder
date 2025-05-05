const express = require('express');
const app = express();

app.use("/",(req,res,next)=>{
    console.log("not response 1")
    // next();
    res.send("hiii...1")
    next();
    
})
app.get("/user",(req,res,next)=>{
    console.log("not response 2")
    res.send("hiii..2.")
    next();
},(req,res,next)=>{
    console.log("not responce 3")
    next();
},(req,res,next)=>{
    res.send("hi there i am here")
}
)


app.listen(3333,()=>console.log("successfully accepted server"))
