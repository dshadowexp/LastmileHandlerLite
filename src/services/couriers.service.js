import { startSession } from "mongoose";
import { Courier } from "../models/couriers.model.js";
import { createActivity } from "./activities.service.js";

export const findCourierById = async (id) => {
    return await Courier.findById(id);
}

export const findCouriersByFleetId = async (fleet) => {
    return await Courier.find({ fleet });
}

export const createCourier = async (courier, session) => {
    let newCourier = new Courier(courier);
    await newCourier.save({ session });
    return newCourier;
}

export const updateCourierById = async (_id, courier) => {
    let options = { new: true, returnOriginal: false }

    return await Courier.findByIdAndUpdate(
        { _id },
        { $set: courier },
        options,
    );
}

export const deleteCourierById = async (id) => {
    return await Courier.deleteOne(id);
}

export const initializeCourier = async (courier) => {
    let session, newCourier, newActivity;
    try {
        session = await startSession();
        session.startTransaction()

        newCourier = await createCourier(courier, session);
        newActivity = await createActivity(newCourier._id, session);

        await session.commitTransaction();
    } catch (error) {
        await session.abortTransaction();
        throw error;
    } finally {
        await session.endSession()
    }

    return {
        newCourier, 
        newActivity
    }
}