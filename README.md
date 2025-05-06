# 🚗 Uber Clone

## Project Overview
This Uber clone application is a full-stack ride-hailing platform built with **React** for the frontend, **Node.js/Express** for the backend, and **Tailwind CSS** for styling. It includes real-time ride tracking, user and captain authentication, Google Maps integration for location-based services, and more. 🚖

## Features ✨
- **User & Captain Authentication** 🔐: Login, signup, and JWT-based session management.
- **Real-Time Ride Tracking** 📍: Users can view live ride tracking, while captains can accept and manage ride requests.
- **Google Maps Integration** 🗺️: Location search, autocomplete, and dynamic routing.
- **Ride Management** 🚗: Search for rides, view fare estimates, and book rides.
- **Driver Dashboard** 🧭: Captains can view and manage ride requests, track completed rides.
- **Responsive UI** 📱: Fully responsive and user-friendly interface with Tailwind CSS.

## Technologies Used 🛠️

### Frontend 🌐
- **React**: Framework for building the user interface.
- **React Router**: For routing between pages.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Google Maps API**: For location search, maps display, and geolocation.
- **Socket.IO**: For real-time updates and communication between users and captains.

### Backend ⚙️
- **Node.js**: JavaScript runtime for backend development.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user, captain, and ride data.
- **JWT**: JSON Web Token for authentication and secure communication.
- **Socket.IO**: Real-time communication between frontend and backend for live updates.
- **Bcrypt.js**: For password hashing and security.

## File Structure 📂

**Frontend:**
```
Uber-Clone/
├── src/
│   ├── App.jsx              # Main entry point
│   ├── components/          # UI components (e.g., LocationSearchPanel, LiveTracking)
│   ├── pages/               # Application pages (e.g., Home, Login, Signup)
│   ├── context/             # Context for managing state (User, Captain, Socket)
│   └── utils/               # Utility functions and constants
```

**Backend:**
```
backend/
├── src/
│   ├── controllers/         # Controllers for handling requests
│   ├── models/              # Data models (User, Captain, Ride)
│   ├── routes/              # API routes (e.g., /users/register, /rides/create)
│   └── utils/               # Helper functions and middlewares
```

## API Endpoints 📝
- **/users/register**: Register a new user.
- **/users/login**: Authenticate user and return JWT token.
- **/rides/create**: Create a new ride.
- **/captains/register**: Register a new captain with vehicle details.
- **/captains/login**: Authenticate captain and return JWT token.
- **/rides/update-status**: Update the status of a ride (e.g., in-progress, completed).

## For brief Readme check independent readme of backend and frontend

## Setup and Installation ⚡

### Prerequisites 📋
- Node.js (v16+)
- Google Maps API key with enabled Maps JavaScript, Places, and Geolocation APIs.
- MongoDB (local or cloud-based setup like MongoDB Atlas)

### Frontend Installation 💻
1. Clone the repository:
   ```bash
   git clone https://github.com/Aditya1016/Uber_clone.git
   ```
2. Install dependencies:
   ```bash
   cd Uber_clone/frontend
   npm install

   cd Uber_clone/backend
   npm install
   ```
3. Create `.env` file and add Google Maps API key as well as mongo db id in the backend:
   ```env
   VITE_GOOGLE_MAPS_API=your_google_maps_api_key
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the app in your browser:  
   `http://localhost:5173`

### Backend Installation 🖥️
1. Clone the backend repository:
   ```bash
   git clone https://github.com/username/uber-clone-backend.git
   ```
2. Install dependencies:
   ```bash
   cd uber-clone-backend
   npm install
   ```
3. Set up environment variables for JWT and database connection in `.env`.
4. Start the backend server:
   ```bash
   npm run start
   ```
