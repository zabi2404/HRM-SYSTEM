import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import authRoute from './Routes/authRoute.js'
import cookieParser from 'cookie-parser';
import EmployeeRoute from './Routes/EmployeeRoute.js'
import MessageRoute from'./Routes/MessageRoute.js'
import LeaveRoute from'./Routes/LeaveRoute.js'
import AttendanceRouter from'./Routes/attendanceRoute.js'

const app = express();
const port = 2404;

dotenv.config();

app.use((req, res, next) => {
    const startTime = Date.now();
    console.log(`[${new Date().toISOString()}] Incoming request: ${req.method} ${req.originalUrl}`);

    res.on('finish', () => {
        console.log(`[${new Date().toISOString()}] Completed request: ${req.method} ${req.originalUrl} -> ${res.statusCode} (${Date.now() - startTime}ms)`);
    });

    next();
});

mongoose.connect(process.env.MONGO)

    .then(() => {
        console.log(`[${new Date().toISOString()}] Database connected`)
    })
    .catch((err) => {
        console.error(`[${new Date().toISOString()}] Database connection error: ${err.message}`)
    })

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute)
app.use('/api/employee', EmployeeRoute)
app.use('/api/message',MessageRoute)
app.use('/api/leave',LeaveRoute)
app.use('/api/attendance',AttendanceRouter)


//middleware for error
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server error";

    console.error(`[${new Date().toISOString()}] Request error: ${req.method} ${req.originalUrl} -> ${statusCode} ${message}`);

    return res.status(statusCode).json(
        {
            success: false,
            statusCode,
            message
        }
    )
})



app.listen(port, () => {
    console.log(`[${new Date().toISOString()}] Server running on port ${port}`)
})


