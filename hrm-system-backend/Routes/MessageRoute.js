import express from 'express'
import { VerifyToken } from '../Utlis/VerifyToken.js';
import { createMessage,getMessages} from '../Controllers/MessageController.js';


const Router = express.Router();


Router.post('/create-message',VerifyToken,createMessage);
Router.get('/get-messages',VerifyToken,getMessages);



export default Router;