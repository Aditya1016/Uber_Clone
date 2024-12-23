# UberClone

# User Management and Captain Management API

A Node.js and Express-based API for managing user and captain registration, login, logout, and profile retrieval. It incorporates JWT-based authentication, token blacklisting, and robust input validation.

## Features
- **User Management**:
  - User registration, login, logout, and profile retrieval.
- **Captain Management**:
  - Captain registration, login, logout, and profile retrieval.
- **Authentication**:
  - JWT-based authentication with a token expiry of 24 hours.
- **Token Blacklisting**:
  - Prevents reuse of logged-out tokens.
- **Validation**:
  - Input validation using `express-validator`.
- **Error Handling**:
  - Centralized error handling using custom `ApiError` utilities.

## Project Structure
```
├── controllers/
│   ├── user.controller.js       # Handles user-related requests (register, login, logout, profile).
│   ├── captain.controller.js    # Handles captain-related requests (register, login, logout, profile).
├── models/
│   ├── user.model.js            # Defines the User schema and methods.
│   ├── captain.model.js         # Defines the Captain schema and methods.
│   └── blacklistToken.model.js  # Defines the schema for blacklisting tokens.
├── routes/
│   ├── user.routes.js           # Sets up routes for user-related operations.
│   ├── captain.routes.js        # Sets up routes for captain-related operations.
├── services/
│   ├── user.service.js          # Business logic for creating users.
│   ├── captain.service.js       # Business logic for creating captains.
├── middleware/
│   └── auth.middleware.js       # Middleware for authenticating users and captains.
├── utils/
│   └── ApiError.js              # Custom error handling utilities.
├── db/
│   └── db.js                    # Database connection logic.
├── .env                         # Environment variables for configuration.
├── app.js                       # Express application setup and middleware.
├── package.json                 # Project dependencies and scripts.
└── README.md                    # Project documentation.
```

## API Endpoints

### User Management

#### `POST /users/register`
Register a new user.

#### `POST /users/login`
Authenticate a user and issue a JWT token.

#### `POST /users/logout`
Log out the user by blacklisting their token and clearing the cookie.

#### `GET /users/profile`
Fetch the profile of the currently authenticated user.

---

### Captain Management

#### `POST /captains/register`
Register a new captain.

##### Request Body:
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
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

##### Response:
```json
{
  "token": "<JWT Token>",
  "captain": {
    "_id": "unique_captain_id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "janesmith@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### `POST /captains/login`
Authenticate a captain and issue a JWT token.

##### Request Body:
```json
{
  "email": "janesmith@example.com",
  "password": "securepassword"
}
```

##### Response:
```json
{
  "token": "<JWT Token>",
  "captain": {
    "_id": "unique_captain_id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "janesmith@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### `GET /captains/profile`
Fetch the profile of the currently authenticated captain.

##### Response:
```json
{
  "_id": "unique_captain_id",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "janesmith@example.com",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### `GET /captains/logout`
Log out the captain by blacklisting their token and clearing the cookie.

##### Response:
```json
{
  "message": "Logout successful"
}
```

---

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/uberclone-api.git
   cd uberclone-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file with the following:
   ```env
   JWT_SECRET=your_jwt_secret
   MONGO_URI=your_mongodb_uri
   ```

4. Start the server:
   ```bash
   npm start
   ```

---

## Technologies Used
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web application framework.
- **Mongoose**: MongoDB object modeling tool.
- **bcrypt**: Password hashing library.
- **jsonwebtoken**: For generating and verifying JWTs.
- **express-validator**: Middleware for validating user input.

---

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

Let me know if there are any additional modifications you'd like! 🚀