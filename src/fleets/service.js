import { Fleet } from "./model.js";

export const createFleet = async (fleet, session) => {
    let newFleet = new Fleet(fleet);
    await newFleet.save({ session });
    return newFleet;
}

export const findFleetByOwnerId = async(owner) => {
    return await Fleet.findOne({ owner });
}