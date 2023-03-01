import { Router } from "express";
import { authenticationMiddleware } from './../middlewares/auth.js';
import { getFleetHandler } from './../controllers/fleets.controller.js';

const router = Router();

router.get('/me', authenticationMiddleware, getFleetHandler)

export default router;