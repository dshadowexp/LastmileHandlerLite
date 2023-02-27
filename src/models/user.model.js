import { Schema, model } from "mongoose";
import Joi from "joi";
import jwt from "jsonwebtoken";

const userRoleEnums = {
    courier: 'COURIER',
    fleet: 'FLEET',
};

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        min: 8,
        max: 256,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: [...Object.values(userRoleEnums)],
        required: true,
    }
})

userSchema.methods.generateAuthToken = function() {
    const data = { id: this._id, role: this.role };
    return jwt.sign(data, 'secretKey');
}

export const User = model('User', userSchema);

export const validateUser = function(user) {
    const schema = Joi.object({
        email: Joi.string().min(8).max(256).required(),
        password: Joi.string().min(8).required(),
        role: Joi.string().required().valid(...Object.values(userRoleEnums)),
    });

    return schema.validate(user);
}