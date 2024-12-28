import { Ride } from "../models/ride.model.js";
import { sendMessageToSocketId } from "../socket.js";
import { fetchDistanceTime } from "./map.services.js";
import crypto from 'crypto';

const fetchFare = async ({
    pickup, destination
}) => {

    if (!pickup || !destination) {
        throw new Error('Pickup and destination are required');
    }

    let { distance, duration } = await fetchDistanceTime(pickup, destination);

    distance = distance.value / 1000;
    duration = duration.value / 60;

    const baseFare = {
        auto: 30,
        moto: 20,
        car: 50
    }

    const perKmRate = {
        auto: 10,
        moto: 8,
        car: 15
    }

    const perMinRate = {
        auto: 2,
        moto: 1,
        car: 3
    }
    
    const fare = {
        auto: Math.round(baseFare.auto + (perKmRate.auto * distance) + (perMinRate.auto * duration)),
        moto: Math.round(baseFare.moto + (perKmRate.moto * distance) + (perMinRate.moto * duration)),
        car: Math.round(baseFare.car + (perKmRate.car * distance) + (perMinRate.car * duration))
    }

    return fare;
};

const generateOtp = (num) => {
    const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
    return otp;
};

const createNewRide = async ({ user, pickup, destination, vehicleType }) => {
    if (!user || !pickup || !destination || !vehicleType) {
        throw new Error('All fields are required');
    }

    const fareDetails = await fetchFare({pickup, destination});

    const ride = await Ride.create({
        user: user._id,
        pickup,
        destination,
        vehicleType,
        fare: fareDetails[vehicleType],
        otp: generateOtp(6),
    });

    return ride;
};

const confirmNewRide = async (rideId, captainId) => {
    if(!rideId || !captainId) {
        throw new Error('Ride ID and Captain ID are required'); 
    }

    await Ride.findOneAndUpdate({
        _id: rideId,
    }, {
        status: "accepted",
        captain: captainId,
    })

    const ride = await Ride.findOne({ _id: rideId }).populate('user').populate('captain').select("+otp");

    if (!ride) {
        throw new Error('Ride not found');
    }

    return ride;
}

const startNewRide = async ({
    rideId, otp, captain
}) => {
    if(!rideId || !otp){
        throw new Error("Ride id and OTP are required");
    }

    const ride = await Ride.findOne({ _id: rideId })
    .populate('user')
    .populate('captain')
    .select("+otp");

    if (!ride) {
        throw new Error("Ride not found");
    }

    console.log(ride)

    if(ride.status !== 'accepted'){
        throw new Error("Ride not accepted")
    }

    if (ride.otp !== otp) {
        throw new Error("Invalid OTP");
    }

    await Ride.findOneAndUpdate({
        _id: rideId
    },
    {
        status: 'ongoing'
    })

    return ride;
}

const endNewRide = async ({
    rideId, captain
}) => {
    if (!rideId || !captain) {
        throw new Error("Ride ID and Captain are required");
    }

    const ride = await Ride.findOne({ 
        _id: rideId,
        captain: captain._id
    }).populate('user').populate('captain').select('+otp');

    if (!ride) {
        throw new Error("Ride not found");
    }

    if (ride.status !== 'ongoing') {
        throw new Error("Ride is not ongoing");
    }

    await Ride.findOneAndUpdate({
        _id: rideId
    }, {
        status: 'completed'
    });

    return ride;
}

export { fetchFare, createNewRide, confirmNewRide, startNewRide, endNewRide };