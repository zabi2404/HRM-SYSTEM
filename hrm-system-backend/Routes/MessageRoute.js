import express from 'express'
import { VerifyToken } from '../Utlis/VerifyToken.js';
import { createMessage } from '../Controllers/MessageController.js';


const Router = express.Router();


Router.post('/create-message',VerifyToken,createMessage)


export default Router;