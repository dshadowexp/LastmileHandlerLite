import config from "config";
import { jwt } from 'jsonwebtoken';
import { errorResponse } from "../utils/responses";

export const authenticationMiddleware = (req, res, next) => {
    const token = req.headers(config.get('token'));
    if (!token) 
        return res.status(401).send(errorResponse('Access denied, No token provided', 401));

     try {
        const payload = jwt.verify(token, 'secretKey');
        req.user = payload;
        next();
    } catch (ex) {
        res.status(400).send(errorResponse('Invalid token', 400));
    }
}