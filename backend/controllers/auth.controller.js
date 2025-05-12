import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()


export const SignUp = async (req,res,next) =>{
    const {username,email,password} = req.body;
    const hashPassword = bcryptjs.hashSync(password,10);
    const newUser=new User({username,email,password:hashPassword})
    try{
        await newUser.save();
        res.status(200).json('User Created Successfuly')
    }catch(err){
        next(err);
    }
}

export const SignIn = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        const isMatch = bcryptjs.compareSync(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = user._doc;
        res.status(200).json({
            success: true,
            message: "Signin successful",
            token
        });
    } catch (err) {
        next(err);
    }
};

export const getUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const { password, ...rest } = user._doc;
        res.status(200).json(rest);
    } catch (err) {
        if (err.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: "Invalid token" });
        }
        next(err);
    }
};



