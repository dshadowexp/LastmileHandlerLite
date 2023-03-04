import { Schema, model } from "mongoose";
import { contactSchema } from "../utils/schemas.js";

const pickupSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    contact: contactSchema
});