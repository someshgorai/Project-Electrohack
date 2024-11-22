import express from 'express';
import { allBlogs, createBlog, deleteBlog, getSingalBlog, myBlogs, update } from '../controllers/blog.controller.js';
import { isAdmin, isAuthenticated } from '../middlewares/userAuth.js';

const router = express.Router();

router.post("/create", isAuthenticated,isAdmin("admin"), createBlog);

router.delete("/delete/:id",isAuthenticated,isAdmin("admin"),deleteBlog);

router.get("/all-blog",allBlogs);

router.get("/singal-blog/:id",isAuthenticated,getSingalBlog);

router.get("/my-blog",isAuthenticated,isAdmin("admin"),myBlogs)

router.put("/update/:id",isAuthenticated,isAdmin("admin"),update);

export default router;