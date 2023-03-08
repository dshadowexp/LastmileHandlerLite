import { Schema, model } from "mongoose";
import Joi from "joi";
import { nameSchema, contactSchema, locationSchema } from '../utils/schemas.js';

const orderSchema = new Schema({
    srcName: nameSchema,
    dstName: nameSchema,
    source: locationSchema,
    destination: locationSchema,
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
}, { timestamps: true });

export const Order = model('Order', orderSchema);

export const validateTrip = function(order) {
    const schema = Joi.object({});

    return schema.validate(order);
}