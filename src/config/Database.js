const mongoose=require("mongoose")

const connnetDB= async ()=>{
    await mongoose.connect("mongodb+srv://namasteyDev:5ODfPUF3kbZJQmGa@cluster0.jcj6rmy.mongodb.net/")
}

module.exports=connnetDB;