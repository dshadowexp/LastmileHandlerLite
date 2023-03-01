import { Schema, model } from "mongoose";
import JoiObjectId from "joi-objectid";
const myJoiObjectId = JoiObjectId(Joi);

const courierSchema = new Schema({
    firstName: {
        type: String,       
        required: true,
        min: 2,
        max: 124,
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 124,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    phoneNumber: {
        type: String,
        min: 9,
        max: 12,
        required: true,
        unique: true,
    },
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
    }
}, { timestamps: true });

export const Courier = model('Courier', courierSchema);

export const validateCreateCourier = function(courier) {
    const schema = Joi.object({
        firstName: Joi.string().min(2).max(124).required(),
        lastName: Joi.string().min(2).max(124).required(),
        email: Joi.email().required(),
        phoneNumber: Joi.string().min(9).max(12).required(),
    });

    return schema.validate(courier);
}

export const validateUpdateCourier = function(courier) {
    const schema = Joi.object({
        email: Joi.email(),
        phoneNumber: Joi.string().min(9).max(12),
    });

    return schema.validate(courier);
}
