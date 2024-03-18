import { config } from "dotenv";
config();

import { Request, Response } from 'express';
import User from '../models/orgUsers'; // Assuming you have a User model
import OrganizationModel from "../models/organizations";
import PaymentUsers from "../models/paymentUsers";
import * as bcrypt from 'bcryptjs';
import { signToken } from '../utils/token';
import { validationResult } from 'express-validator';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import { errorLogger, appLogger } from '../logger';


async function sendEmail(
  to: string,
  subject?: string,
  text?: string,
  attachments?: { filename: string; path: string }[]
): Promise<void> {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.ADMIN_GMAIL,
      pass: process.env.ADMIN_GMAIL_PASSWORD,
    },
  });

  // Define email data
  const mailOptions: nodemailer.SendMailOptions = {
    from: process.env.ADMIN_GMAIL,
    to,
    subject: subject || 'Default Subject',
    text: text || 'Default Email Text',
    attachments: attachments || [],
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    // console.log('Email sent successfully');
  } catch (error) {
    errorLogger.error(`Error in sending email in auth:`, error instanceof Error ? error.message : error);
    console.error('Error sending email:', error);
  }
}

// Example usages
// sendEmail('recipient@example.com');
// sendEmail('recipient@example.com', 'Your Subject');
// sendEmail('recipient@example.com', 'Your Subject', 'Hello, this is the email content.');

const saltRounds = 10;

export const createUser = async (req: Request, res: Response): Promise<any> => {

  let success = false;

  // If there are validation errors return bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

  try {
    const { username, email, studentType, age, password, organization_code } = req.body;
    // console.log(studentType);
    //check whether org_code exists
    const org = await OrganizationModel.findOne({ org_studentType: studentType, org_code: organization_code });
    if (!org) {
      return res.status(404).json({ success, error: "Organization code does not exist" });
    }

    // check whether the user with this email exists already
    const user = await User.findOne({ email: email, org_code: organization_code });
    if (user) {
      return res.status(400).json({ success, error: "Email already exists" });
    }

    // Salting password
    const salt = await bcrypt.genSalt(saltRounds);
    const secPass = await bcrypt.hash(password, salt);

    // Creating a new user
    const userCreated = await User.create({
      username: username,
      email: email,
      studentType: studentType,
      age: age,
      password: secPass,
      org_code: organization_code,
    });

    if (userCreated) {
      // Token authentication using JWT
      const authtoken = signToken(userCreated.username, userCreated.email, userCreated.org_code);

      res.status(201).json(authtoken);

      const subject = "Welcome to the Psychometric Test Journey";
      const text = `Dear ${userCreated.username},\n\nWe're happy to welcome you on board as a registered member of our psychometric test program. Our psychometric test is designed to help you unlock your full potential, understand your strengths, and identify areas for development.\n\nPlease take a moment to explore the attached document and familiarize yourself with the test instructions.\n\nIf you have any questions or need assistance, please don't hesitate to reach out to us.\n\nThank you for choosing us as your partner in self-discovery.\n\nClick on the link to proceed your psychometric test: https://successteps.in/login\n\nWarm regards,\n\nDr. Antony Augusthy`;
      const attachments = [{
        filename: 'Psychometric Test Instructions.pdf',
        path: `src/tp/Psychometric Test Instructions.pdf`,
      }];

      appLogger.info(`User registered: ${userCreated.username}`);

      sendEmail(userCreated.email, subject, text, attachments);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

export const checkRandomNumber = async (req: Request, res: Response): Promise<any> => {

  let success = false;

  // If there are validation errors return bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

  try {
    const { randomNumber } = req.body;

    const pu = await PaymentUsers.findOne({ razorpay_order_id: randomNumber });
    if (!pu) {
      return res.status(404).json({ success, error: "randomNumber does not exist" });
    } else {
      res.status(200).json({ success: true });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

export const createDirectUser = async (req: Request, res: Response): Promise<any> => {

  let success = false;

  // If there are validation errors return bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }
  
  try {
    const { username, email, studentType, age, password } = req.body;
    //check whether org_code exists
    let organization_code = ''

    if (studentType === 'HighSchool') {
      organization_code = process.env.HIGH_SCHOOL_CODE as string;
    } else if (studentType === 'College') {
      organization_code = process.env.COLLEGE_CODE as string;
    } else if (studentType === 'Professional') {
      organization_code = process.env.PROFESSIONAL_CODE as string;
    }

    // check whether the user with this email exists already
    const user = await User.findOne({ email: email, org_code: organization_code });
    if (user) {
      return res.status(400).json({ success, error: "Email already exists" });
    }

    // Salting password
    const salt = await bcrypt.genSalt(saltRounds);
    const secPass = await bcrypt.hash(password, salt);

    // Creating a new user
    const userCreated = await User.create({
      username: username,
      email: email,
      studentType: studentType,
      age: age,
      password: secPass,
      org_code: organization_code,
    });

    if (userCreated) {
      // Token authentication using JWT
      const authtoken = signToken(userCreated.username, userCreated.email, userCreated.org_code);

      res.status(201).json(authtoken);

      const subject = "Welcome to the Psychometric Test Journey";
      const text = `Dear ${userCreated.username},\n\nWe're happy to welcome you on board as a registered member of our psychometric test program. Our psychometric test is designed to help you unlock your full potential, understand your strengths, and identify areas for development.\n\nPlease take a moment to explore the attached document and familiarize yourself with the test instructions.\n\nIf you have any questions or need assistance, please don't hesitate to reach out to us.\n\nThank you for choosing us as your partner in self-discovery.\n\nClick on the link to proceed your psychometric test: https://successteps.in/login\n\nWarm regards,\n\nDr. Antony Augusthy`;
      const attachments = [{
        filename: 'Psychometric Test Instructions.pdf',
        path: `src/tp/Psychometric Test Instructions.pdf`,
      }];

      appLogger.info(`User registered: ${userCreated.username}`);

      sendEmail(userCreated.email, subject, text, attachments);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

export async function logintest (req: Request, res: Response): Promise<any> {

  let success = false;

  // If there are validation errors, return bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ success, errors: errors.array() });
    return;
  }
  try {
    const { username, password, inorganization } = req.body;

    const AdminEmail = process.env.ADMIN_EMAIL;

    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
      const authtoken = signToken(username, AdminEmail as string, '6969');

      appLogger.info(`Admin logged in: ${username}`);

      res.status(200).json({ success: true, username: username, userType: 'admin', authtoken });
      return;
    }

    return;
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
    return;
  }
};

export async function login(req: Request, res: Response): Promise<any> {

  let success = false;

  // If there are validation errors, return bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ success, errors: errors.array() });
    return;
  }
  try {
    const { username, password, inOrganization } = req.body;

    const AdminEmail = process.env.ADMIN_EMAIL;

    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
      const authtoken = signToken(username, AdminEmail as string, '6969');

      appLogger.info(`Admin logged in: ${username}`);

      res.status(200).json({ success: true, username: username, userType: 'admin', authtoken });
      return;
    }

    // Finding if user exists
    let user = null;
    const includedCodes = [process.env.HIGH_SCHOOL_CODE as string, process.env.COLLEGE_CODE as string, process.env.PROFESSIONAL_CODE as string];

    if (inOrganization === true) {
      user = await User.findOne({
        username: username,
        org_code: { $nin: includedCodes }
      });
    } else if (inOrganization === false){
      user = await User.findOne({
        username: username,
        org_code: { $in: includedCodes }
      });
    }

    if (!user) {

      appLogger.info(`Login failed due to wrong username for: ${username}`);
      return res.status(400).json({ success, error: 'Please try to login with correct username' });
    }

    // Matching user password
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      appLogger.info(`Login failed due to wrong password for: ${username}`);
      return res.status(400).json({ success, error: 'Please try to login with correct password' });
    }
    // Token authentication using JWT
    const authtoken = signToken(user.username, user.email, user.org_code);

    appLogger.info(`User logged in: ${user.username}`);

    // Response
    res.status(200).json({ success: true, username: username, userType: 'user', authtoken });
    return;
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
    return;
  }
};

export async function forgotPassword(req: Request, res: Response): Promise<any> {
  try {
    const email = req.body.email;

    const ems = await User.findOne({ email: email });
    if (!ems) {
      return res.status(404).json({ success: false, error: "No user with this email was found" });
    }

    const token = crypto.randomBytes(20).toString('hex');

    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);

    // const resetLink = `http://localhost:3000/reset-password/${token}`;
    const resetLink = `https://successteps.in/reset-password/${token}`;

    const subject = 'Password Reset';
    const text = `This link is active only for an hour.\nClick the following link to reset your password: ${resetLink}`;

    await sendEmail(email, subject, text);

    await User.findOneAndUpdate({ email }, { resetToken: token, resetTokenExpiry: expiration });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
}

export async function resetPassword(req: Request, res: Response): Promise<any> {
  try {
    const { token, newPassword } = req.body;

    // Step 1: Verify if the token is valid and not expired
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: new Date() }, // Check if the token is not expired
    });

    if (!user) {
      return res.status(400).json({ success: false, error: "The link has expired, please try again" });
    }

    // Step 2: Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    // Step 3: Update the user's password and clear the reset token
    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;

    // Save the updated user document
    await user.save();

    res.status(200).json({ success: true });
  } catch (error) {
    errorLogger.error(`Error in reseting password:`, error instanceof Error ? error.message : error);
    res.status(500).json({ success: false, error: error });
  }
}