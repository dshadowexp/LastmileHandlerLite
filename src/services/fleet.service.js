import { Fleet } from "../models/fleet.model.js";

export const createFleet = async (fleet, session) => {
    let newFleet = new Fleet(fleet);
    await newFleet.save({ session });
    return newFleet;
}