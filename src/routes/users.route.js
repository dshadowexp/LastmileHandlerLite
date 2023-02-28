import { Router } from "express";
import { createUserHandler, authenticateUserHandler, getUserHandler } from "../controllers/users.controller.js";
import { authenticationMiddleware } from "../middlewares/auth.js";
import asyncHandler from "../middlewares/async.js";

const router = Router();

router.post('/', asyncHandler(createUserHandler));

router.post('/auth', authenticateUserHandler);

router.get('/me', authenticationMiddleware, getUserHandler);

export default router;