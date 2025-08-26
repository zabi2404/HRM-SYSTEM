import User from "../Modals/User_modal.js";
import { HandleError } from "../Utlis/error.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const Login = async (req, res, next) => {
    const { email, password } = req.body;
    const validUser = await User.findOne({ email });
    if (!validUser) { return next(HandleError(404, "User not found")) }
    const credentialCheck = bcrypt.compareSync(password, validUser.password);
    if (!credentialCheck) { return next(HandleError(404, "Wrong Credentials")) };

    console.log(validUser);
    try {
        const { password, ...rest } = validUser._doc;
        const token = jwt.sign({
            id: validUser._id,
            role: validUser.role
        }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" })
        // jwt token is for backend security which is store in cookie in the front end which is get back to server on every req and server check if the user is authenticated or not
        res.cookie('token', token, { httpOnly: true, expires: new Date(Date.now() + 24 * 60 * 60 * 1000) })
            .status(200).json(rest)
    } catch (error) {
        next(error)
    }
}


export const signUp = async (req, res, next) => {
    const { id, role } = req.decoded
    if (role === 'admin') {     //only admin can acccess this page

        const { username, email, password, role, status } = req.body;

        const hashedPassword = bcrypt.hashSync(password, 10);
        try {
            const user = await User.create({
                username,
                email,
                password: hashedPassword,
                role,
                status,
            })
            res.status(200).json("User Created")
        } catch (error) {
            next(error);

        }
    }
    else {
        return next(HandleError(403, "Forbidden"));
    }
}