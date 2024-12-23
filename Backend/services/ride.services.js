import { Ride } from "../models/ride.model.js";
import { fetchDistanceTime } from "./map.services.js";
import crypto from 'crypto';

const calculateFare = (distance, duration, vehicleType) => {
    let baseFare, perKmRate, perMinuteRate;

    switch (vehicleType) {
        case 'auto':
            baseFare = 20;
            perKmRate = 10;
            perMinuteRate = 1;
            break;
        case 'car':
            baseFare = 50;
            perKmRate = 15;
            perMinuteRate = 2;
            break;
        case 'moto':
            baseFare = 10;
            perKmRate = 5;
            perMinuteRate = 0.5;
            break;
        default:
            throw new Error('Invalid vehicle type');
    }

    const distanceInKm = distance / 1000;
    const durationInMinutes = duration / 60;

    const fare = baseFare + (perKmRate * distanceInKm) + (perMinuteRate * durationInMinutes);
    return Math.round(fare);
};

const fetchFare = async (pickup, destination, vehicleType) => {
    if (!pickup || !destination) {
        throw new Error('Pickup and destination are required');
    }

    const { distance, duration } = await fetchDistanceTime(pickup, destination);
    const fare = calculateFare(distance.value, duration.value, vehicleType);
    return { fare, distance, duration };
};

const createNewRide = async ({ user, pickup, destination, vehicleType }) => {
    if (!user || !pickup || !destination || !vehicleType) {
        throw new Error('All fields are required');
    }

    const fareDetails = await fetchFare(pickup, destination, vehicleType);

    const ride = new Ride({
        user,
        pickup,
        destination,
        vehicleType,
        fare: fareDetails.fare,
        otp: generateOtp(6),
    });

    return ride;
};

const generateOtp = (num) => {
    const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
    return otp;
};

export { fetchFare, createNewRide };