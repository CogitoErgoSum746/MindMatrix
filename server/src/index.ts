import { config } from "dotenv";
config();

import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from 'helmet';
// import { signToken } from './utils/token';
// import jwt from "jsonwebtoken";

import adminRoute from "./routes/admin";
import authRoute from "./routes/auth";
import userRoute from "./routes/user";
import { verifyAdmin, verifyUser } from "./middlewares/verifyLogin";
import { handle404, handle500 } from './controllers/errorController';

const PORT = 8001;

const app = express();

app.use(helmet()); //helmet.js and cors modules for security purposes
app.use(
    cors({
        origin: 'https://successteps.in',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    })
);
// app.use(
//     cors({
//         origin: 'https://successteps.in',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type', 'Authorization'],
//         credentials: true,
//         optionsSuccessStatus: 204,
//     })
// );

// Middleware to handle OPTIONS requests globally
// const handleOptions = (req: Request, res: Response, next: NextFunction) => {
//     if (req.method === 'OPTIONS') {
//         // Respond to the preflight request
//         res.header('Access-Control-Allow-Origin', 'https://successteps.in');
//         res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//         res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//         res.header('Access-Control-Allow-Credentials', 'true');
//         res.sendStatus(204); // No content for successful OPTIONS request
//     } else {
//         // Continue to the next middleware for non-OPTIONS requests
//         next();
//     }
// };

// Apply the handleOptions middleware globally for all routes
// app.use(handleOptions);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", authRoute);
app.use("/api/admin", verifyAdmin, adminRoute);
app.use("/api/user", verifyUser, userRoute);

// app.get('/home', (req: Request, res: Response, next) => {
//     res.status(200).json('indexxx');
// });

// app.post('/jwtoken', (req: Request, res: Response, next) => {
//     try {
//         const { username, email, code } = req.body;

//         const authtoken = signToken(username, email, code);
//         res.status(201).json(authtoken);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("Internal server error");
//     }
// });

// app.post('/jwtokeno', (req: Request, res: Response, next) => {
//     try {
//         const token = req.header('authtoken');

//         const decoded: any = jwt.verify(token as string, 'mysecret'); //process.env.JWT_SECRET as string
//         res.status(201).send(decoded.user);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("Internal server error");
//     }
// });

app.use(handle404); //error handler
app.use(handle500);

const mongs = process.env.MONGO_URL
mongoose.connect(mongs!).then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
});