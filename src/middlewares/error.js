import { errorResponse } from "../utils/responses.js";

export default function(err, req, res, next) {
    console.log(err);
    res.status(500).send(errorResponse('Something failed', 500));
}