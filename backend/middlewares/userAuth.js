 import  jwt  from "jsonwebtoken";
import { User } from "../models/user.model.js";


// authentication
export const isAuthenticated = async (req,res,next)=>{
    try {
        const token = req.cookies.jwt;
        console.log(token);
        if(!token){
            return res.status(401).json({message:"User not Authenticated"});
        }

        const decoded = jwt.verify(token,process.env.JWT_TOKEN);
       
        
         const user = await User.findById(decoded.userId);
         if(!user){
            return res.status(401).json({message:"User not found"});
         }
         req.user = user;
        next();
        
    } catch (error) {
        console.log(error);
        res.status(401).json({message:"User is not Aunthenticated"});
        
    }
}

// authorization

export const isAdmin = (...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return res.status(403).json({message:`User with given role ${req.user.role} not allowed`})
        }
        next();
    }
}