import { Schema, model } from "mongoose";
import Joi from "joi";
import jwt from "jsonwebtoken";
import { emailSchema } from "../utils/schemas.js";
import { userRoleEnums } from "../utils/enums.js";
import { validateEmail, validateContact, validateName } from "../utils/validations.js";

const userSchema = new Schema({
    email: emailSchema,
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: [...Object.values(userRoleEnums)],
        required: true,
        default: userRoleEnums.fleet
    }
}, { timestamps: true })

userSchema.methods.generateAuthToken = function() {
    const data = { id: this._id, role: this.role };
    return jwt.sign(data, 'secretKey');
}

export const User = model('User', userSchema);

export const validateUser = function(user) {
    const schema = Joi.object({
        email: validateEmail(),
        password: Joi.string().min(8).max(64).required(),
    });

    return schema.validate(user);
}

export const validateCreateUser = function(account) {
    const schema = Joi.object({
        email: validateEmail(),
        password: Joi.string().min(8).required(),
        name: validateName(),
        contact: validateContact(),
    });

    return schema.validate(account);
}