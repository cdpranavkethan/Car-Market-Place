import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

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
        const token = jwt.sign({ id: user._id }, "40f7f2e17c22c3bb645a7d969fc1f42ddaf5021c51b1bd0dde2a567f41035b82");
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



