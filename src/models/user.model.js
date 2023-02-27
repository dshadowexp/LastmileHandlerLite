import { Schema, model } from "mongoose";
import Joi from "joi";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['rider', 'manager'],
        required: true,
    }
})

userSchema.methods.generateUserToken = function() {
    const data = { id: this._id, role: this.role };
    return jwt.sign(data, 'secretKey');
}

export const User = model('User', userSchema);

export const validateUser = function(user) {
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
        role: Joi.string().required(),
    });

    return schema.validate(user);
}