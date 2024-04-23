import { timeStamp } from 'console';
import mongoose from 'mongoose';
const userschema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    accounttype: {
        type: String,
        required: true,
    }
}, { timestamps: true }); // Use 'timestamps' instead of 'timeStamp'

const User = mongoose.model('User', userschema);

export default User;
