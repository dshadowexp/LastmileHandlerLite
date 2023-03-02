import { Activity } from "../models/activities.model.js";

export const createActivity = async (courier, session) => {
    let position = new Activity({
        courier,
        location: {
            type: "Point",
            coordinates: [0, 0]
        }
    });
    await position.save({ session });
    return position;
}

export const updateActivity = async (position) => {

}