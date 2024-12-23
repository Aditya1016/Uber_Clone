import { Router } from "express";
const router = Router();
import {body} from "express-validator";
import {authUser} from "../middleware/auth.middleware.js";
import {createRide} from "../controllers/ride.controllers.js";

router.post('/create',
    authUser,
    body('pickup').isString().withMessage('Pickup must be a string'),
    body('destination').isString().withMessage('Destination must be a string'),
    body('vehicleType').isString().isIn(['auto', 'car', 'moto']).withMessage('Enter a valid vehicle type'),
    createRide
)

export {router}