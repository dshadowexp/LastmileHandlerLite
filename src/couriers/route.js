import { Router } from "express";
import { getCourierHandler, getCouriersForFleetHandler, createCourierHandler, updateCourierHandler, deleteCourierHandler } from './controller.js';
import { authenticationMiddleware } from "../middlewares/auth.js";
import asyncHandler from "../middlewares/async.js";

const router = Router();

router.get('/:id', getCourierHandler);

router.get('/fleet', authenticationMiddleware, getCouriersForFleetHandler);

router.post('/', authenticationMiddleware, asyncHandler(createCourierHandler));

router.patch('/:id', authenticationMiddleware, updateCourierHandler);

router.delete('/:id', authenticationMiddleware, deleteCourierHandler);

export default router;