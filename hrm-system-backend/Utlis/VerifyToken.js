import jwt from 'jsonwebtoken';
import { HandleError } from './error.js';

export const VerifyToken = (req, res, next) => {

    const token = req.cookies?.token;

    if (!token) { return next(HandleError(401, "Unauthraized User")) }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded) => {
        if (error) return next(HandleError(403, "Forbidden"))
        req.decoded = decoded;
        next();
    })
}