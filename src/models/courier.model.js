import { Schema, model } from "mongoose";

const courierSchema = new Schema({
    firstName: {
        type: String,       
        required: true,
        min: 2,
        max: 124,
        default: 'courier-firstname',
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 124,
        default: 'courier-lastname',
    },
    email: {
        type: String,
        unique: true,
    },
    phoneNumber: {
        type: String,
        min: 9,
        max: 11,
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
});

export const Courier = model('Courier', courierSchema);

export const validateCourier = function(courier) {
    const schema = Joi.object({
        firstName: Joi.string().min(2).max(124),
        lastName: Joi.string().min(2).max(124),
        email: Joi.email(),
        phoneNumber: Joi.string(),
    });

    return schema.validate(courier);
}
