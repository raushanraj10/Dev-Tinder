const express = require('express');
const app = express();

app.use("/",(req,res)=>{
    res.send("from dashboard an not changeable")
})


app.use("/test",(req,res)=>{
    res.send("from test")
})

app.use("/node",(req,res)=>{
    res.send("from node")
})


app.listen(3333,()=>console.log("successfully accepted server"))
