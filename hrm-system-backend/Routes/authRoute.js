import express from 'express';
import { Login, signUp } from '../Controllers/UserController.js';
import { VerifyToken } from '../Utlis/VerifyToken.js';




const authRoute = express.Router();

authRoute.post('/login',Login)
authRoute.post('/signup',VerifyToken,signUp)

export default authRoute;