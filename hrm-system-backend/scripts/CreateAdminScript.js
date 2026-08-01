import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import User from '../Modals/User_modal.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const createAdmin = async () => {
    await User.create({
        username: "zohaib",
        email: "zohaib24a@gmail.com",
        password: "1234",
        role: "admin",
        status: "active"
    });
};

const run = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Database connected");

        await createAdmin();
        console.log("Admin user created");
    } catch (err) {
        console.error("Database connection error: ", err);
    } finally {
        await mongoose.disconnect();
    }
};

run();
