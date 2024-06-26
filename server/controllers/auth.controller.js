import { error } from 'console';
import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';


export const signup =async(req,res ,next)=>{
    console.log(req.body)
   const {username, email , password ,    accounttype }=req.body;
   const hashedpassword= bcryptjs.hashSync(password,10);
   const newUser = new User({username, email , password :hashedpassword,     accounttype });
   try {
    await newUser.save()
    res.status(201).json({ message: 'User created successfully' });
   } catch (error) {
    next(error);
    
   } 
}

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) {
            return res.status(404).json({ message: "Wrong credentials" });
        }

        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return res.status(401).json({ message: "Wrong credentials" });
        }

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: hashedPassword, ...rest } = validUser._doc;
        const expiryDate = new Date(Date.now() + 3600000);
        res.cookie('access_token', token, { httpOnly: true ,expires: expiryDate }).status(200).json({ message: "Login successful", rest });
        
        console.log(email , password)
    } catch (error) {
        next(error);
    }


}