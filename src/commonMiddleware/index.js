const jwt=require('jsonwebtoken')

exports.requireSignIn=(req,res,next)=>{
    if(req.headers.authorization){
        const token=req.headers.authorization.split(" ")[1];
        const user=jwt.verify(token,"MERNSTACKDE");
        req.user=user;
    }
    else{
        return res.status(400).json({message:"Authorization Required"});
    }
   
    next()
    
}