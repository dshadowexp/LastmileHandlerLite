import { Activity } from "./model.js";

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

export const deleteActivity = async (_id, session) => {
    await Activity.deleteOne({ _id }).session(session);
}

export const updateActivity = async (courier, position) => {

}