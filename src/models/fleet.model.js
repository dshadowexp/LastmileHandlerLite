import { Schema, model } from "mongoose";
import Joi from "joi";

const fleetSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        min: 5,
        max: 64,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    }
});

export const Fleet = model('Fleet', fleetSchema);

export const validateFleet = function(fleet) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(64).required()
    })

    return schema.validate(fleet);
}

