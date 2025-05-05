const adminAuth=(req,res,next)=>{
     const isadmin="yes"
     if(isadmin)
        next();
    else
    res.status(401).send("not able to authorised")
}
module.exports={
  adminAuth
}