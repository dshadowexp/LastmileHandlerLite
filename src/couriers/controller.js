import { validateObjectId } from "./../utils/validations.js";
import { errorResponse, successResponse, validationResponse } from "../utils/responses.js";
import { findCourierById, findCouriersByFleetId, initializeCourier, updateCourierById, deleteCourierById } from "./service.js";
import { validateCreateCourier, validateUpdateCourier } from "./model.js";
import { findFleetByOwnerId } from "../fleets/service.js";

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
    const fleetId = req.params.id;
    const couriers = await findCouriersByFleetId(fleetId);
    res.status(200).send(successResponse('Success', couriers, 200));
}

export const createCourierHandler = async (req, res) => {
    const { error } = validateCreateCourier(req.body);
    if (error)
        return res.status(422).send(validationResponse(error.details[0].message));

    const fleet = await findFleetByOwnerId(req.user.id);

    req.body.owner = req.user.id;
    req.body.fleet = fleet._id;
    let results = await initializeCourier(req.body);
    res.status(202).send(successResponse('created', results, 202));
}

export const updateCourierHandler = async (req, res) => {
    const id = req.params.id;
    if (!validateObjectId(id))
        return res.status(422).send(validationResponse('invalid request'));

    const { error } = validateUpdateCourier(req.body);
    if (error)
        return res.status(422).send(validationResponse(error.details[0].message));

    let courier = await findCourierById(id);
    if (!courier)
        return res.status(404).send(errorResponse('courier not found', 404));

    if (!courier.owner.equals(req.user.id))
        return res.status(403).send(errorResponse('permission denied', 403));

    courier = await updateCourierById(id, req.body);
    res.status(200).send(successResponse('success', courier, 200));
}

export const deleteCourierHandler = async (req, res) => {
    const id = req.params.id;
    if (!validateObjectId(id))
        return res.status(422).send(validationResponse('invalid request'));

    res.status(200).send(successResponse('success', {}, 200));
}