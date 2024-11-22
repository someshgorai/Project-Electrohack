import express from 'express';
import { allAdmin, login, logout, myprofile, register } from '../controllers/user.controller.js';
import { isAuthenticated } from '../middlewares/userAuth.js';
const router = express.Router();

router.post("/register",register);

router.post("/login",login);

router.get("/logout",logout);
router.get("/my-profile",isAuthenticated,myprofile);

router.get("/alladmin",allAdmin);



export default router;