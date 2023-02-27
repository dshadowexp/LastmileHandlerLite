import { Fleet } from "../models/fleet.model.js";

export const createFleet = async (fleet, session) => {
    let fleet = new Fleet(fleet);
    await fleet.save({ session });
    return fleet;
}