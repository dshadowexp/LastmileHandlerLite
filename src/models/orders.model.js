import { Schema, model } from "mongoose";
import Joi from 'joi';

const orderSchema = new Schema({

});

export const Order = model("Order", orderSchema);

export const validateOrder = function(order) {
    const schema = Joi.object({});
    return schema.validate(order);
}