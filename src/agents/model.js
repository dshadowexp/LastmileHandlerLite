import { Schema, model } from "mongoose";
import { contactSchema, emailSchema, locationSchema, socialMediaSchema } from "../utils/schemas.js";
import Joi from 'joi';

const agentSchema = new Schema({
    name: {
        type: String,
        min: 2,
        max: 124,
        required: true,
        unique: true,
    },
    email: emailSchema,
    contact: contactSchema,
    location: locationSchema,
    medias: [ socialMediaSchema ]
}, { timestamps: true });

export const Agent = model('Agent', agentSchema);

export const validateAgent = function(agent) {
    const schema = Joi.object({});

    return schema.validate(agent);
}