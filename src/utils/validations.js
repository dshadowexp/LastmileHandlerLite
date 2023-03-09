import { Types } from "mongoose";
import Joi from "joi";

export const validateObjectId = function(objectId) {
    return Types.ObjectId.isValid(objectId);
} 

export const validateLocation = function() {
    return Joi.object({
        point: Joi.object({}),
        locDesc: Joi.string(),
    });
}

export const validateContact = function() {
    return Joi.object({
        cc: Joi.string().min(1).max(3).required(),
        number: Joi.string().min(9).max(11).required()
    });
}

export const validateEmail = function() {
    return Joi.string().email().min(8).max(256).required();
}

export const validateName = function() {
    return Joi.string().min(5).max(128).required();
}