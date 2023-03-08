import { Schema, model } from "mongoose";
import Joi from "joi";
import { nameSchema, contactSchema, validateContact } from '../utils/schemas.js';

const fleetSchema = new Schema({
    name: nameSchema,
    contact: contactSchema,
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
        contact: validateContact()
    });

    return schema.validate(fleet);
}

