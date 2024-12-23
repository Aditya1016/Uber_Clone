import dotenv from "dotenv"
dotenv.config();

import express from 'express';
import cors from "cors"
import connectDB from "./db/db.js";
import {router as userRoutes} from "./routes/user.routes.js"; 
import cookieParser from "cookie-parser";
import {router as captainRoutes} from "./routes/captain.routes.js"
import { router as mapRoutes } from "./routes/map.routes.js";
import {router as rideRoutes} from "./routes/ride.routes.js";
connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.use('/users', userRoutes)
app.use('/captains', captainRoutes)
app.use('/rides', rideRoutes)
app.use('/maps', mapRoutes)

export { app }