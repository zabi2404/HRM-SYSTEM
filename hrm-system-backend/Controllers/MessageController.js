import Message from "../Modals/Message_modal.js";

import { HandleError } from "../Utlis/error.js";

export const createMessage = async (req, res, next) => {

    const { id, role } = req.decoded;
    if (role === 'hr' || role === 'admin') {
        const { title, message } = req.body;

        try {
            const notification = await Message.create({

                title,
                message,
                Created_by: id

            })
            res.status(200).json("Message Published")
        } catch (error) {
            next(error)
        }
    }
    else {
        next(HandleError(404, 'Unauthraized'))
    }


}



export const getMessages = async (req, res, next) => {

    try {

        const notification = await Message.find().sort({ createdAt: -1 });
        const [Created_by, ...rest] = notification

        res.status(200).json(rest)

    } catch (error) {
        next(error)
    }


}

export const DeleteMessage = async (req, res, next) => {
    const { role } = req.decoded;
    if (role === 'hr' || role === 'admin') {
     
        const id = req.params.id;

        try {
            await Message.findByIdAndDelete(id)
            res.status(200).json("Message Deleted Successfully")

        } catch (error) {
            next(error)
        }
    }
    else {
        next(HandleError(404, 'Unauthraized'))
    }
}