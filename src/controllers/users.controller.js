import _ from "lodash";
import config from "config";

import { validateCreateUser, validateUser } from "../models/users.model.js";
import { findUserByEmail, findUserById } from "../services/users.service.js";
import { errorResponse, successResponse, validationResponse } from "../utils/responses.js";
import { initializeUser } from '../services/users.service.js';
import { validatePassword } from "../utils/crypt.js";

export const authenticateUserHandler = async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) 
        return res.status(422).send(validationResponse(error.details[0].message));

    const user = await findUserByEmail(req.body.email);
    if (!user)
        return res.status(404).send(errorResponse('invalid email or password', 404));

    const isPasswordValid = await validatePassword(req.body.password, user.password);
    if (!isPasswordValid)
        return res.status(404).send(errorResponse('invalid email or password', 404));

    const token = user.generateAuthToken();
    res.status(200).send(
        successResponse(
            'Authentication successfull',
            token,
            200
        )
    );
}

export const createUserHandler = async (req, res) => {
    const { error } = validateCreateUser(req.body);
    if (error) 
        return res.status(422).send(validationResponse(error.details[0].message));

    let user = await findUserByEmail(req.body.email);
    if (user) 
        return res.status(409).send(errorResponse('user already exists', 409));

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