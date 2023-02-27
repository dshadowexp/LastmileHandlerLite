import { validateUser } from "../models/user.model.js";
import { findUserByEmail } from "../services/user.service.js";
import { errorResponse, successResponse, validationResponse } from "../utils/responses.js";
import { initializeUser } from './../services/user.service';

export const authenticateUserHandler = async (req, res) => {

}

export const createUserHandler = async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) 
        return res.status(404).send(validationResponse(error.details[0].message));

    let user = await findUserByEmail(req.body.email);
    if (user) 
        return res.status(404).send(errorResponse('user already exists', 404));

    user = await initializeUser(req.body);

    const token = user.generateAuthToken();

    res.header(config.get('token'), token).status(201).send(
        successResponse(
            'Created', 
            _.pick(user, ['_id', 'email']), 
            201
        )
    );
}

export const getUserHandler = async (req, res) => {

}