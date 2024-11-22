 import express from 'express';
 import dotenv from 'dotenv';
 import mongoose from 'mongoose';
 import cors from "cors";
 import cookieparser from 'cookie-parser';
 
 import { v2 as cloudinary } from 'cloudinary';
 import fileupload from 'express-fileupload';
import router from './routes/user-route.js';

import blogRoute from './routes/blog.route.js'

const app= express();
dotenv.config();
const MONG_URI = process.env.MONG_URI;
try {
    mongoose.connect(MONG_URI)
    console.log("mongoose is conected");
    
} catch (error) {
    console.log(error);
    
}
   app.use(express.json());
   app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials:true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    
   
   }));
   app.use(express.urlencoded({extended: true}));
   app.use(cookieparser());

//    fileupload
   app.use(fileupload({
    useTempFiles:true,
    tempFileDir:'/tmp/',
   }));


  app.use("/api/users",router);
  
  app.use("/api/blogs",blogRoute);

//  cloudinary
  cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRET,
});


 const port =process.env.PORT;

 app.listen(port,()=>{
    console.log(`server is running on port: ${port}`);
 })

 