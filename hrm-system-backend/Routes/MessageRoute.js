import express from 'express'
import { VerifyToken } from '../Utlis/VerifyToken.js';
import { createMessage,DeleteMessage,getMessages} from '../Controllers/MessageController.js';


const Router = express.Router();


Router.post('/create-message',VerifyToken,createMessage);
Router.get('/get-messages',VerifyToken,getMessages);
Router.delete('/delete-message/:id',VerifyToken,DeleteMessage);



export default Router;