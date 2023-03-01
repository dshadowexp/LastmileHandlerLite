import { validateObjectId } from './../utils/validations.js';
import { errorResponse, successResponse, validationResponse } from './../utils/responses.js';
import { createCourier, findCourierById, findCouriersByFleetId, initializeCourier } from './../services/couriers.service';
import { validateCreateCourier } from '../models/couriers.model';

export const getCourierHandler = async (req, res) => {
    const id = req.params.id;
    if (!validateObjectId(id)) 
        return res.status(422).send(validationResponse('invalid request'));

    const courier = await findCourierById(id);
    if (!courier)
        return res.status(404).send(errorResponse('courier does not exist', 404));

    res.status(200).send(successResponse('Success', courier, 200));
}

export const getCouriersForFleetHandler = async (req, res) => {
    const fleetId = req.user._id;
    const couriers = await findCouriersByFleetId(fleetId);
    res.status(200).send(successResponse('Success', couriers, 200));
}

export const createCourierHandler = async (req, res) => {
    const { error } = validateCreateCourier(req.body);
    if (error)
        return res.status(422).send(validationResponse(error.details[0].message));

    req.body.fleet = req.user._id;
    let results = await initializeCourier(req.body);
    res.status(202).send(successResponse('created', results, 202));
}

export const updateCourierHandler = async (req, res) => {

}

export const deleteCourierHandler = async (req, res) => {
    
}