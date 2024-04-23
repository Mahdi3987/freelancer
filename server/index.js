import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import second from './routes/User.route.js'
import authroutes from './routes/auth.route.js'

import cors from "cors";
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});



const app = express();
app.use(express.json())
app.listen(3000, () => {
    console.log('server listen on port 3000!')

});

/*const corsOrigin = {
   origin: '*', //or whatever port your frontend is using
    credentials: true,
    optionSuccessStatus: 200
}*/

app.use(cors());
app.use('/user', second);
app.use('/auth', authroutes);

app.use((err, req, res, next) => {
    const statuscode = err.statuscode || 500;
    const message = err.message || 'internal server error';
    return res.status(statuscode).json({
        success: false,
        message,
        statuscode,

    })

})

