import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import authRoute from './Routes/authRoute.js'
import cookieParser from 'cookie-parser';
const app = express();
const port = 2404;

dotenv.config();
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("DataBase Connected...")
})
.catch((err)=>{
    console.log(err.message)
})

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoute)

//middleware for error
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server error";
    return res.status(statusCode).json(
        {
            success:false,
            statusCode,
            message
        }
    )
})



app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})


