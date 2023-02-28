import { Schema, model } from "mongoose";
import Joi from 'joi';

const tripSchema = new Schema({
    
});

export const Trip = model('Trip', tripSchema);

export const validateTrip = function(trip) {
    const schema = Joi.object({});

    return schema.validate(trip);
}