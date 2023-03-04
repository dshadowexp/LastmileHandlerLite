import { Schema, model } from "mongoose";
import Joi from "joi";
import { contactSchema } from '../utils/schemas.js';

const orderSchema = new Schema({
    srcPoint: {
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates: [Number],
        required: true
    },
    dstPoint: {
       type: {
            type: String,
            enum: ['Point']
        },
        coordinates: [Number],
        required: true 
    },
    src: {
        type: String,
        require: true
    },
    dst: {
        type: String,
        require: true
    },
    srcContact: contactSchema,
    dstContact: contactSchema,
    targetFleet: {
        type: Schema.Types.ObjectId,
        ref: 'Fleet'
    },
    paymentOption: {
        type: String,
        enum: []
    }
});

export const Order = model('Order', orderSchema);

export const validateTrip = function(order) {
    const schema = Joi.object({});

    return schema.validate(order);
}