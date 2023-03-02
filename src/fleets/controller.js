import _ from "lodash";
import { errorResponse, successResponse } from "../utils/responses.js";
import { findFleetByOwnerId } from "./service.js";

export const getFleetHandler = async (req, res) => {
    const userDetails = req.user;
    const fleet = await findFleetByOwnerId(userDetails.id);
    if (!fleet)
        return res.status(404).send(errorResponse('fleet does not exist', 404));

    res.status(200).send(
        successResponse(
            'Success', 
            _.pick(fleet, ['_id', 'name', 'contact']), 
            200
        )
    );
}