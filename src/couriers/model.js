import { Schema, model } from "mongoose";
import Joi from "joi";
import { contactSchema, emailSchema, nameSchema } from "../utils/schemas.js";
import { validateEmail, validateName, validateContact } from './../utils/validations.js';

const courierSchema = new Schema({
    firstName: nameSchema,
    lastName: nameSchema,
    email: emailSchema,
    contact: contactSchema,
    trips: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    earnings: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    ratings: {
        type: Number,
        min: 0.0,
        max: 5.0,
        default: 5.0
    },
    fleet: {
        type: Schema.Types.ObjectId,
        ref: 'Fleet',
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, { timestamps: true });

export const Courier = model('Courier', courierSchema);

export const validateCreateCourier = function(courier) {
    const schema = Joi.object({
        firstName: validateName(),
        lastName: validateName(),
        email: validateEmail(),
        contact: validateContact().required(),
    });

    return schema.validate(courier);
}

export const validateUpdateCourier = function(courier) {
    const schema = Joi.object({
        email: validateEmail(),
        contact: validateContact(),
    });

    return schema.validate(courier);
}
