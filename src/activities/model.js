import { Schema, model } from "mongoose";
import Joi from 'joi';
import { locationSchema } from './../utils/schemas.js';

const activitySchema = new Schema({
    courier: {
        type: Schema.Types.ObjectId,
        ref: 'Courier',
        required: true,
        unique: true,
    },
    active: {
        type: Boolean,
        required: true,
        default: false,
    },
    location: locationSchema,
}, { timestamps: true });

export const Activity = model('Activity', activitySchema);

export const validatePosition = function(position) {
    const schema = Joi.object({
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
    });

    return schema.validate(position);
}
