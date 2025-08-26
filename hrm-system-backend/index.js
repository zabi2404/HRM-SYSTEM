import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';


dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("DataBase Connected...")
})
.catch((err)=>{
    console.log(err.message)
})



const app = express();
const port = 2404;









app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})


