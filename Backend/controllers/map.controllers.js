import { fetchAddressCoordinates, fetchAutoCompleteSuggestions, fetchDistanceTime } from "../services/map.services.js";
import { validationResult } from "express-validator";

const getAddressesCoordinates = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { address } = req.query;

    try {
        const coordinates = await fetchAddressCoordinates(address);
        res.status(201).json(coordinates);
    } catch (error) {
        console.error('Error getting coordinates:', error);
        res.status(500).json({ message: error.message });
    }
};

const getDistanceTime = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { origin, destination } = req.query;

    try {
        const { distance, duration } = await fetchDistanceTime(origin, destination);
        res.status(201).json({ distance, duration });
    } catch (error) {
        console.error('Error getting distance and time:', error);
        res.status(500).json({ message: error.message });
    }
}

const getAutoCompleteSuggestions = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { input } = req.query;

    try {
        const suggestions = await fetchAutoCompleteSuggestions(input);
        res.status(201).json(suggestions);
    } catch (error) {
        console.error('Error getting suggestions:', error);
        res.status(500).json({ message: error.message });
    }
}

export { 
    getAddressesCoordinates,
    getDistanceTime,
    getAutoCompleteSuggestions
};