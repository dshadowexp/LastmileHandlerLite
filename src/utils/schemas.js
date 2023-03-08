import { Schema } from "mongoose";
import Joi from 'joi';

export const locationSchema = new Schema({
    point: {
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates: [Number],
        required: true
    },
    locDesc: {
        type: String
    }
}, { _id: false });

export const validateLocation = function(location) {
    return Joi.object({});
}

export const contactSchema = new Schema({
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

export const validateContact = function() {
    return Joi.object({
        cc: Joi.string().min(1).max(3).required(),
        number: Joi.string().min(9).max(11).required()
    });
}

export const socialMediaSchema = new Schema({
    platform: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true
    }
}, { _id: false });

export const emailSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        min: 8,
        max: 256,
    },
}, { _id: false });

export const nameSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        min: 5,
        max: 64,
    }
}, { _id: false });