import { Router } from "express";
import { createUserHandler, authenticateUserHandler } from "../controllers/users.controller.js";
import asyncHandler from "../middlewares/async.js";

const router = Router();

router.post('/', asyncHandler(createUserHandler));

router.post('/auth', authenticateUserHandler);

export default router;