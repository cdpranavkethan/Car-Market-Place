import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'

export const SignUp = async (req,res,next) =>{
    console.log(req.body)
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
export const SignIn = (req, res) => {
    res.json({ message: "Signin successful" });
  };



