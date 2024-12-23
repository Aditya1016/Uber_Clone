import axios from 'axios';

const fetchAddressCoordinates = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        if (data.status === 'OK') {
            const { lat, lng } = data.results[0].geometry.location;
            return { lat, lng };
        } else {
            throw new Error(`Geocoding API error: ${data.status}`);
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error);
        throw new Error('Failed to fetch coordinates');
    }
};

const fetchDistanceTime = async (origin, destination) => {
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        if (data.status === 'OK') {
            if(data.rows[0].elements[0].status === 'ZERO_RESULTS') {
                throw new Error('No results found');
            }

            const { distance, duration } = data.rows[0].elements[0];
            return { distance, duration };
        } else {
            throw new Error(`Distance Matrix API error: ${data.status}`);
        }
    } catch (error) {
        console.error('Error fetching distance and time:', error);
        throw new Error('Failed to fetch distance and time');
    }
}

const fetchAutoCompleteSuggestions = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        if (data.status === 'OK') {
            return data.predictions;
        } else {
            throw new Error(`Auto complete API error: ${data.status}`);
        }
    } catch (error) {
        console.error('Error fetching suggestions:', error);
        throw new Error('Failed to fetch suggestions');
    }
}

export { fetchAddressCoordinates, fetchDistanceTime, fetchAutoCompleteSuggestions };