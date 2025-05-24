import { User } from "../models/user.model.js";
import { v2 as cloudinary } from 'cloudinary';
import bcrypt from 'bcrypt';
import createTokenandSaveCookie from "../jwt/authToken.js";
import { Blog } from "../models/blog.model.js";

export const register= async (req,res)=>{
    try {
        if(!req.files || Object.keys(req.files).length ===0){
            return res.status(400).json({msg:"No file uploaded"})
            
        }   
        console.log(req.body);

        const {photo}=req.files;
        const allowedFormats = ["image/jpeg","image/png","image/webp"];
        if(!allowedFormats.includes(photo.mimetype)){
            return res.status(400).json({msg:"Invalid file format"})
        }
        const {name,email,password,phone,education,role}=req.body;
        if(!name || !email || !password || !phone || !education || !role || !photo){
            return res.status(400).json({message:"Please fill all the fields"})
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message:"Email already exists"})
        }
        const cloudinaryResponse= await cloudinary.uploader.upload(
            photo.tempFilePath,
        )
        if(!cloudinaryResponse || cloudinaryResponse.error){
            return res.status(400).json({message:"Failed to upload image"})
        }

         const hashPassword = await bcrypt.hash(password,10);
        const newUser=  User({
            name,
            email,
            password: hashPassword,
            phone,
            education,
            role,
            photo:{
            public_id:cloudinaryResponse.public_id,
            url:cloudinaryResponse.url
        }});
        await newUser.save();
       if(newUser){
         const token= await createTokenandSaveCookie(newUser._id,res);
        return res.status(201).json({message:"User created successfully",user:newUser,token:token})
       }

        
        
    } catch (error) {
        console.log(error);
        
    }
}

export const login = async (req,res)=>{
   
    try {
        const {email,password,role}=req.body;
        if(!email || !password || !role){
            return res.status(400).json({message:"Please fill all the fields"})
        }
        const user = await User.findOne({email:email}).select("+password");
        
      
        
        if(!user.password){
            return res.status(400).json({message:"user password is missing"});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid email or password"})
        }

        if(user.role!==role){
            return res.status(400).json({message:`Given role ${role} is not found`})
        }
        const token= await createTokenandSaveCookie(user._id,res);
        res.status(200).json({
            message:"User logged in successfully",
             user: {
                _id:user._id,
                name:user.name,
                email:user.email,
                role:user.role
            },
            token: token,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"Internal Server error"})
        
    }
}


export const logout = async (req,res)=>{
   try {
    res.clearCookie("jwt",{httpOnly:true});
    res.status(200).json({message:"User logout succesfully"});
   } catch (error) {
    console.log(error);
    res.status(500).json({message:"Internal Server error"});
    
   }
}

export const myprofile = async (req,res)=>{
    const user= await req.user;
   
    res.status(200).json(user);
}

export const allAdmin = async (req,res)=>{
    const admin= await User.find({role:"admin"});
    res.status(200).json(admin);

}