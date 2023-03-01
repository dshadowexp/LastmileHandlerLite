import { findFleetByOwnerId } from "../services/fleets.service.js";

export const getFleetHandler = async (req, res) => {
    const userDetails = req.user;
    const fleet = await findFleetByOwnerId(userDetails.id);
    if (!fleet)
        return res.status(404).send(errorResponse('user does not exist', 404));

    res.status(200).send(
        successResponse(
            'Success', 
            _.pick(fleet, ['_id', 'name']), 
            200
        )
    );
}