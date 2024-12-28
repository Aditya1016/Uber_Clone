import { createNewRide, fetchFare, confirmNewRide, startNewRide, endNewRide } from "../services/ride.services.js";
import { validationResult } from "express-validator";
import {fetchCaptainsInTheVicinity, fetchAddressCoordinates} from "../services/map.services.js";
import {sendMessageToSocketId} from "../socket.js";
import { Ride } from "../models/ride.model.js";

const createRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }  

    const { pickup, destination, vehicleType } = req.body;

    try {
        const ride = await createNewRide({ user: req.user?._id, pickup, destination, vehicleType });
       
        const pickupCoordinates = await fetchAddressCoordinates(pickup);

        const {ltd, lng} = pickupCoordinates;

        const captainsInRadius = await fetchCaptainsInTheVicinity( ltd, lng, 5000 );
       
        ride.otp = ""

        const rideWithUser = await Ride.findOne({ _id : ride._id}).populate('user');

        captainsInRadius.map(captain => {
            sendMessageToSocketId(captain.socketId, {
                event: 'new-ride',
                data: rideWithUser         
            });
        });

        res.status(201).json(ride);
    } catch (error) {     
        res.status(500).json({ error: error.message });
    }
}

const getFare = async (req, res) => {   
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }  

    const { pickup, destination } = req.query;

    try {
        const fare = await fetchFare({ pickup, destination });
        res.status(200).json(fare);
    } catch (error) {     
        res.status(500).json({ error: error.message });
    }
}

const confirmRide = async (req, res) => {  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId, captainId } = req.body;

    try {
        const ride = await confirmNewRide(rideId, captainId)

        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-confirmed',
            data: ride
        });

        res.status(200).json(ride);
    } catch (error) {   
        res.status(500).json({ error: error.message });
    }
}

const startRide = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors: errors.array()})
    }

    const {rideId, otp} = req.query

    try {
        const ride = await startNewRide({
            rideId, 
            otp,
            captain: req.captain._id
        })

        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-started',
            data: ride
        })

        return res.status(200).json(ride)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: error.message})
    }
}

const endRide = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors: errors.array()})
    }

    const {rideId} = req.body
    try {
        const ride = await endNewRide({
            rideId,
            captain: req.captain
        })

        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-ended',
            data: ride
        })

        return res.status(200).json(ride)

    } catch (err) {
        return res.status(500).json({message: err.message})
    }
}

export {
    createRide,
    getFare,
    confirmRide,
    startRide,
    endRide
}