import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
// import { IGetUserAuthInfoRequest } from "../utils/extendRequest";

dotenv.config({ path: './.env' });

// const JWT_SECRET: string | undefined = process.env.JWT_SECRET;

const fetchUser = (req: Request, res: Response, next: NextFunction) => {
  // Get user from the JWT token and add id to req object
  const token = req.header('authtoken');
  if (!token) {
    res.status(401).send({ error: 'No token' });
  }
  try {
    const data: any= jwt.verify(token as any, 'mysecret');
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate using a valid token' });
  }
};

export default fetchUser;
