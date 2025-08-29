import express from 'express';
import { Login, signUp,LogOut} from '../Controllers/UserController.js';
import { VerifyToken } from '../Utlis/VerifyToken.js';




const authRoute = express.Router();

authRoute.post('/login',Login)
authRoute.post('/signup',VerifyToken,signUp)
authRoute.get('/logout',VerifyToken,LogOut)

export default authRoute;