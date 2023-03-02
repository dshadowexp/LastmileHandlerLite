import { Schema, model } from "mongoose";
import Joi from "joi";
import { phoneNumberSchema, phoneNumberValidate } from './../utils/schemas.js';

const fleetSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        min: 5,
        max: 64,
    },
    contact: phoneNumberSchema,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    }
}, { timestamps: true });

export const Fleet = model('Fleet', fleetSchema);

export const validateFleet = function(fleet) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(64).required(),
        contact: phoneNumberValidate()
    });

    return schema.validate(fleet);
}

