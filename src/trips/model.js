import { Schema, model } from "mongoose";
import Joi from "joi";

const tripSchema = new Schema({
    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
        unique: true,
        required: true,
    },
    courier: {
        type: Schema.Types.ObjectId,
        ref: 'Courier',
        required: true
    }
});

export const Trip = model('Trip', tripSchema);

export const validateTrip = function(trip) {
    const schema = Joi.object({});

    return schema.validate(trip);
}