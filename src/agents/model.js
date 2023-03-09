import { Schema, model } from "mongoose";
import { nameSchema, contactSchema, emailSchema, locationSchema, socialMediaSchema } from "../utils/schemas.js";
import Joi from 'joi';

const agentSchema = new Schema({
    name: nameSchema,
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