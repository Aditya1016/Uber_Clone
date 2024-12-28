import { Router } from "express";
const router = Router();
import {body, query} from "express-validator";
import {authCaptain, authUser} from "../middleware/auth.middleware.js";
import {createRide, getFare, confirmRide, startRide, endRide} from "../controllers/ride.controllers.js";

router.post('/create',
    authUser,
    body('pickup').isString().withMessage('Pickup must be a string'),
    body('destination').isString().withMessage('Destination must be a string'),
    body('vehicleType').isString().isIn(['auto', 'car', 'moto']).withMessage('Enter a valid vehicle type'),
    createRide
)

router.get('/get-fare',
    authUser,
    query('pickup').isString().withMessage('Pickup must be a string'),
    query('destination').isString().withMessage('Destination must be a string'),
    getFare
)

router.post('/confirm-ride',
    authCaptain,
    body('rideId').isString().withMessage('Ride ID must be a string'),
    // body('otp').isString().withMessage('OTP must be a string'),
    confirmRide
)

router.get('/start-ride',
    authCaptain,
    query('rideId').isMongoId().withMessage("Invalid ride id"),
    query('otp').isString().isLength({min: 6, max: 6}).withMessage("Invalid OTP"),
    startRide
)

router.post('/end-ride',
    authCaptain,
    body('rideId').isMongoId().withMessage('Invalid ride id'),
    endRide
)

export {router}