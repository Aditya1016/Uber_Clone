# Uber Clone 🚖

An Uber-inspired web application for user and captain management. This project allows users to register, log in, and interact with the platform while providing captains the ability to register, manage their vehicles, and participate in the Uber ecosystem.

---

## Features ✨

### **Frontend**
- Built with **React** and **Tailwind CSS**.
- Responsive UI for user and captain management.
- **Dynamic Forms**:
  - User and Captain registration.
  - Login with validation.
- **State Management**:
  - Manage form data with React's `useState` and handle submission with `useEffect`.

### **Backend**
- Developed with **Node.js**, **Express**, and **MongoDB**.
- JWT-based authentication for secure user and captain sessions.
- **APIs**:
  - User and Captain registration, login, profile management, and logout.
  - Token blacklisting for logout functionality.
- Data validation using `express-validator`.

---

## Project Structure 📂

```
UberClone/
├── frontend/                # React Frontend
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page-specific React components
│   │   ├── assets/          # Static files (fonts, images, etc.)
│   │   └── index.css        # Tailwind CSS imports
│   └── package.json         # Frontend dependencies
│
├── backend/                 # Node.js Backend
│   ├── controllers/         # Handles API logic
│   ├── middleware/          # Authentication and validation
│   ├── models/              # MongoDB schemas
│   ├── routes/              # API routes
│   ├── services/            # Business logic
│   ├── utils/               # Utilities (error handling, etc.)
│   ├── db.js                # MongoDB connection
│   └── app.js               # Express setup
│
├── .env                     # Environment variables
├── README.md                # Project documentation
└── package.json             # Backend dependencies
```

---

## API Endpoints 🌐

### **User Management**
#### `POST /users/register`
- Register a new user.
- **Request Body**:
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```

#### `POST /users/login`
- Log in as a user.
- **Request Body**:
  ```json
  {
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```

#### `POST /users/logout`
- Log out a user and blacklist the JWT token.

#### `GET /users/profile`
- Fetch the profile of the currently authenticated user.

---

### **Captain Management**
#### `POST /captains/register`
- Register a new captain.
- **Request Body**:
  ```json
  {
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "janesmith@example.com",
    "password": "securepassword",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "location": {
      "lat": 12.34567,
      "lng": 98.76543
    }
  }
  ```

#### `POST /captains/login`
- Log in as a captain.

#### `GET /captains/logout`
- Log out a captain and blacklist the JWT token.

#### `GET /captains/profile`
- Fetch the profile of the currently authenticated captain.

---

## Technologies Used 🛠️

### **Frontend**
- **React**: UI development.
- **Tailwind CSS**: Responsive and utility-first styling.
- **React Router**: Navigation between pages.

### **Backend**
- **Node.js**: JavaScript runtime.
- **Express.js**: Web application framework.
- **MongoDB**: NoSQL database.
- **Mongoose**: MongoDB object modeling.
- **bcrypt**: Password hashing.
- **jsonwebtoken**: JWT authentication.
- **express-validator**: Input validation.

---

## Installation 🛠️

### **1. Clone the repository**
```bash
git clone https://github.com/your-username/uber-clone.git
cd uber-clone
```

### **2. Setup Backend**
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### **3. Setup Frontend**
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

---

## How to Use 🚀

1. **Register as a User or Captain**:
   - Navigate to the signup page for users (`/signup`) or captains (`/captain-signup`).

2. **Login**:
   - Users can log in at `/login`.
   - Captains can log in at `/captain-login`.

3. **Manage Profiles**:
   - View user or captain profiles after logging in.

4. **Logout**:
   - Log out securely, and tokens will be blacklisted to prevent reuse.

---

## Contributing 🤝

Contributions are welcome! Please fork this repository, create a new branch, and submit a pull request.

---

## License 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
```

---

### Key Highlights:
- **Detailed Structure**: Highlights both frontend and backend directories.
- **Comprehensive API Documentation**: Covers endpoints for both user and captain management.
- **Setup Instructions**: Guides on how to install dependencies and run the project locally.

Let me know if you'd like adjustments or additional details! 🚀