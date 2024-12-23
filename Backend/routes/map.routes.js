import { Router } from "express";
import { query } from "express-validator";
import { authUser, authCaptain } from "../middleware/auth.middleware.js";
import { getAddressesCoordinates, getAutoCompleteSuggestions, getDistanceTime } from "../controllers/map.controllers.js";

const router = Router()

router.get('/get-coordinates',
    query('address').isString().withMessage('Address must be a string'),
    authUser, 
    getAddressesCoordinates
)

router.get('/get-distance-time',
    query('origin').isString().withMessage('Origin must be a string'),
    query('destination').isString().withMessage('Destination must be a string'),
    authUser,
    getDistanceTime
)

router.get('/get-suggestions', 
    query('input').isString().withMessage('Address must be a string'),
    authUser,
    getAutoCompleteSuggestions
)

export {router}