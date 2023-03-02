import { Schema } from "mongoose";
import Joi from 'joi';

export const phoneNumberSchema = new Schema({
    cc: {
        type: String,
        min: 1,
        max: 3,
        require: true,
    },
    number: {
        type: String,
        min: 9,
        max: 11,
        required: true,
    }
}, { _id : false });

export const phoneNumberValidate = function() {
    return Joi.object({
        cc: Joi.string().min(1).max(3).required(),
        number: Joi.string().min(9).max(11).required()
    });
}