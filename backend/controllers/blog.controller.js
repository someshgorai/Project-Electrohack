import { Blog } from "../models/blog.model.js";
import mongoose from "mongoose";

import { v2 as cloudinary } from 'cloudinary';

export const createBlog= async (req,res)=>{
    try {
        if(!req.files || Object.keys(req.files).length ===0){
            return res.status(400).json({msg:"No file uploaded"})
        }

        const { blogImage}=req.files;
        const allowedFormats = ["image/jpeg","image/png","image/webp"];
        if(!allowedFormats.includes(blogImage.mimetype)){
            return res.status(400).json({msg:"Invalid file format"})
        }
        const { title,category,about}=req.body;
        if(!title || !category || !about ){
            return res.status(400).json({message:"Please fill all the fields"})
        }
       const adminName = req?.user?.name;

       const adminPhoto = req?.user?.photo;
       const createdBy=req?.user?._id;

        const cloudinaryResponse= await cloudinary.uploader.upload(
            blogImage.tempFilePath,
        )
        if(!cloudinaryResponse || cloudinaryResponse.error){
            return res.status(400).json({message:"Failed to upload image"})
        }

        
        const blogData=  ({
            title,
           about,
             category,
             adminName,
             adminPhoto,
             createdBy,
          blogImage:{
            public_id:cloudinaryResponse.public_id,
            url:cloudinaryResponse.url
        }});
        const blog = await Blog.create(blogData);
      
          res.status(201).json({
            message:"Blog created succesfully",
            blog,
          })
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server error"})
    }
}


export const deleteBlog = async (req,res)=>{
    const {id}= req.params;
    const blog= await Blog.findById(id);
    if(!blog){
        return res.status(404).json({message:"Blog not found"})
    }
    await blog.deleteOne();
    res.status(200).json({message:"Blog deleted succesfully"})
}

export const allBlogs = async (req,res)=>{
   const allblogs=await Blog.find();
   res.status(200).json(allblogs)
   
}


export const getSingalBlog = async (req,res)=>{
    const {id}= req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:"Invalid blog id"});

    }

    const blog =await Blog.findById(id);
    if(!blog){
        return res.status(404).json({message:"Blog not found"})
    }
    res.status(200).json(blog);
}