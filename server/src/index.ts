import { config } from "dotenv";
config();

import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
// import { signToken } from './utils/token';
// import jwt from "jsonwebtoken";

import adminRoute from "./routes/admin";
import authRoute from "./routes/auth";
import userRoute from "./routes/user";
import { verifyAdmin, verifyUser } from "./middlewares/verifyLogin";
import { handle404, handle500 } from './controllers/errorController';

const PORT = 8001;

const app = express();

app.use(
    cors({
        origin: "*",
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRoute);
app.use("/admin", verifyAdmin, adminRoute);
app.use("/user", verifyUser, userRoute);

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

const mongs = process.env.MONGO_URL;

mongoose.connect(mongs!).then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
});