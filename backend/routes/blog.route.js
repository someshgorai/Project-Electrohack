import express from 'express';
import { allBlogs, createBlog, deleteBlog, getSingalBlog } from '../controllers/blog.controller.js';
import { isAdmin, isAuthenticated } from '../middlewares/userAuth.js';

const router = express.Router();

router.post("/create", isAuthenticated,isAdmin("admin"), createBlog);

router.delete("/delete/:id",isAuthenticated,isAdmin("admin"),deleteBlog);

router.get("/all-blog",isAuthenticated,allBlogs);

router.get("/singal-blog/:id",isAuthenticated,getSingalBlog);

export default router;