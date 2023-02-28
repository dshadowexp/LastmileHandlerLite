import { startSession } from "mongoose";
import _ from "lodash";
import { User } from "../models/user.model.js";
import { hashPassword } from '../utils/crypt.js';
import { createFleet } from './fleet.service.js';

export const createUser = async (user, session) => {
    let newUser = new User(user);
    newUser.password = await hashPassword(newUser.password);
    await newUser.save({ session });
    return newUser
}

export const findUserByEmail = async (email) => {
    return await User.findOne({ email });
}

export const initializeUser = async (userPayload) => {
    let session, newUser, newFleet;
    try {
        session = await startSession();
        session.startTransaction();
        
        let user = _.pick(userPayload, ['email', 'password']);
        let fleet = _.pick(userPayload, ['name']);

        newUser = await createUser(user, session);
        fleet.owner = newUser._id;
        newFleet = await createFleet(fleet, session);

        await session.commitTransaction();
    } catch (error) {
        await session.abortTransaction();
        throw error;
    } finally {
        await session.endSession();
    }

    return newUser;
}