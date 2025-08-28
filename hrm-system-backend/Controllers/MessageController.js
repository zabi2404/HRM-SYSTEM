import Message from "../Modals/Message_modal.js";

import { HandleError } from "../Utlis/error.js";

export const createMessage = async(req,res,next)=>{

const {id, role } = req.decoded;
if(role==='hr'||role==='admin'){
const {title,message}= req.body;
    
try {
    const notification =await Message.create({
    
        title,
        message,
        Created_by:id
    
    })
    res.status(200).json(notification)
} catch (error) {
    next(error)
}



}
else{
    next(HandleError(404,'Unauthraized'))
}


}