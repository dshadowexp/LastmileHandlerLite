import { Schema, model } from "mongoose";
import { Joi } from 'joi';

const activitySchema = new Schema({
    courier: {
        type: Schema.Types.ObjectId,
        ref: 'Courier',
        required: true,
        unique: true,
    },
    active: {
        type: Boolean,
        required: true,
        default: false,
    },
    location: {
        type: {
            type: String,
            enum: ['Point', 'Polygon']
        },
        coordinates: [Number] 
    },
}, { timestamps: true });

export const Activity = model('Activity', activitySchema);

export const validatePosition = function(position) {
    const schema = Joi.object({
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
    });

    return schema.validate(position);
}
