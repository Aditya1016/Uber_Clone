import { createNewRide } from "../services/ride.services.js";
import { validationResult } from "express-validator";

const createRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }  

    const { pickup, destination, vehicleType } = req.body;

    try {
        const ride = await createNewRide({ user: req.user?._id, pickup, destination, vehicleType });
        res.status(201).json(ride);
    } catch (error) {     
        res.status(500).json({ error: error.message });
    }
}

export {createRide}