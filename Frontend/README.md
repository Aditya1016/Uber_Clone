# Frontend Readme for Uber Clone

## Project Overview
The frontend for this Uber clone application is built with **React** and **Tailwind CSS**, utilizing modern libraries like `@react-google-maps/api` for map integration and `socket.io-client` for real-time updates. The application provides a seamless user experience for both users and captains, with features such as location-based ride search, fare calculations, and live tracking.

---

## File Structure
```
Uber-Clone/
├── src/
│   ├── App.jsx              # Main application entry point
│   ├── index.css           # Global styling
│   ├── index.jsx           # Main rendering logic
│   ├── context/
│   │   ├── UserContext.jsx       # Context for user data
│   │   ├── CaptainContext.jsx    # Context for captain data
│   │   ├── SocketContext.jsx     # Context for socket connections
│   ├── components/
│   │   ├── LocationSearchPanel.jsx  # Location search panel component
│   │   ├── VehiclePanel.jsx          # Vehicle selection component
│   │   ├── ConfirmRide.jsx          # Ride confirmation component
│   │   ├── LookingForDriver.jsx     # Driver search component
│   │   ├── WaitingForDriver.jsx     # Waiting panel for driver
│   │   ├── LiveTracking.jsx         # Live tracking component
│   │   ├── CaptainDetails.jsx       # Captain details component
│   │   ├── ConfirmRidePopUp.jsx     # Ride confirmation popup
│   │   ├── FinishRide.jsx           # Ride finish component
│   │   ├── RidePopUp.jsx            # Ride request popup
│   │   ├── VehicleCard.jsx          # Vehicle information card
│   ├── pages/
│   │   ├── Home.jsx                # User home page
│   │   ├── CaptainHome.jsx         # Captain home page
│   │   ├── UserLogin.jsx           # User login page
│   │   ├── UserSignup.jsx          # User signup page
│   │   ├── CaptainLogin.jsx        # Captain login page
│   │   ├── CaptainSignup.jsx       # Captain signup page
│   │   ├── CaptainLogout.jsx       # Captain logout page
│   │   ├── UserLogout.jsx          # User logout page
│   │   ├── CaptainRiding.jsx       # Captain ongoing ride page
│   │   ├── Riding.jsx              # User ongoing ride page
│   │   ├── Start.jsx               # Initial landing page
│   ├── utils/
│       ├── constants.js        # Common constants used across the app
│       ├── helpers.js          # Helper functions
```

---

## Pages Overview

### 1. **Home.jsx**
This page allows users to:
- Search for rides by providing pickup and destination locations.
- View ride fare estimates for different vehicle types.
- Confirm ride bookings.

### 2. **CaptainHome.jsx**
This page provides captains with:
- Ride requests in their vicinity.
- Live tracking of ongoing rides.
- Earnings and availability statistics.

### 3. **UserLogin.jsx / CaptainLogin.jsx**
- Handles login functionality for users and captains.
- Uses context to store and propagate authenticated user or captain data across the app.

### 4. **UserSignup.jsx / CaptainSignup.jsx**
- Enables new users or captains to register by providing necessary details.

### 5. **Start.jsx**
- The landing page that allows users to navigate to login or sign-up options.

### 6. **Riding.jsx / CaptainRiding.jsx**
- Provides a live tracking interface for users and captains during ongoing rides.
- Includes details about the ride, such as fare, distance, and OTP.

### 7. **UserLogout.jsx / CaptainLogout.jsx**
- Logs out the user or captain by clearing tokens and redirecting to login pages.

---

## Components Overview

### 1. **LocationSearchPanel.jsx**
- Displays location suggestions based on user input.
- Uses the Google Maps Places API for autocomplete functionality.

### 2. **VehiclePanel.jsx**
- Shows available vehicle types and their estimated fares.

### 3. **ConfirmRide.jsx**
- Allows users to confirm the selected ride.

### 4. **LookingForDriver.jsx**
- Displays a loading screen while searching for a driver.

### 5. **WaitingForDriver.jsx**
- Informs users that a driver has been assigned and is on the way.

### 6. **LiveTracking.jsx**
- Provides live tracking of the user's or driver's location using the Google Maps API.

### 7. **CaptainDetails.jsx**
- Displays captain-specific information like name, earnings, and hours online.

### 8. **ConfirmRidePopUp.jsx**
- A popup component for confirming rides, including OTP validation.

### 9. **FinishRide.jsx**
- Allows the captain to finish the ride and updates the ride status.

### 10. **RidePopUp.jsx**
- Displays new ride requests for the captain with accept/ignore options.

### 11. **VehicleCard.jsx**
- Displays individual vehicle details like image, type, fare, and ETA.

---

## Context Overview

### 1. **UserContext.jsx**
- Manages user authentication and profile data.

### 2. **CaptainContext.jsx**
- Manages captain authentication and profile data.

### 3. **SocketContext.jsx**
- Handles socket.io connections for real-time communication.

---

## Endpoints and Routing

### User Endpoints
- `/login` - User login
- `/signup` - User signup
- `/home` - Protected route for user home page
- `/logout` - User logout
- `/riding` - Live tracking for ongoing rides

### Captain Endpoints
- `/captain-login` - Captain login
- `/captain-signup` - Captain signup
- `/captain-home` - Protected route for captain home page
- `/captain-logout` - Captain logout
- `/captain-riding` - Live tracking for ongoing captain rides

---

## Setup and Installation

### Prerequisites
- Node.js (v16 or higher)
- Google Cloud API key with the following enabled:
  - Maps JavaScript API
  - Places API
  - Geolocation API

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/username/uber-clone.git
   ```

2. Navigate to the frontend directory:
   ```bash
   cd uber-clone/frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file and add your Google Maps API key:
   ```env
   VITE_GOOGLE_MAPS_API=your_google_maps_api_key
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open the app in your browser:
   ```
   http://localhost:5173
   ```

---

## Contributions
- Contributions are welcome! Please create a pull request with detailed information about the changes.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

