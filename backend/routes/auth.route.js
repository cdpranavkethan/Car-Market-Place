import express from 'express'
import { SignIn, SignUp, getUser } from '../controllers/auth.controller.js';

const router=express.Router();

router.post("/signup", SignUp);
router.post("/signin", SignIn);
router.get("/user", getUser);

export default router;