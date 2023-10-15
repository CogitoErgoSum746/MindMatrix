import { config } from "dotenv";
config();

import { Request, Response } from 'express';
import User from '../models/users'; // Assuming you have a User model
import OrganizationModel from "../models/organizations";
import * as bcrypt from 'bcryptjs';
import { signToken } from '../utils/token';
import { validationResult } from 'express-validator';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

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
    const { username, email, age, password, organization_code } = req.body;

    //check whether org_code exists
    const org = await OrganizationModel.findOne({ org_code: organization_code });
    if (!org) {
      return res.status(404).json({ success, error: "Organization code does not exist" });
    }

    // check whether the user with this email exists already
    const user = await User.findOne({ email: email });
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
      age: age,
      password: secPass,
      org_code: organization_code,
    });

    if (userCreated) {
      const subject = "Welcome to the Psychometric Test Journey";
      const text = "Dear Aspirant,\n\nWe're happy to welcome you on board as a registered member of our psychometric test program. Our psychometric test is designed to help you unlock your full potential, understand your strengths, and identify areas for development.\n\nPlease take a moment to explore the attached document and familiarize yourself with the test instructions.\n\nIf you have any questions or need assistance, please don't hesitate to reach out to us.\n\nThank you for choosing us as your partner in self-discovery.\n\nWarm regards,\n\nDr. Antony Augusthy";
      const attachments = [{
        filename: 'Psychometric Test Instructions.pdf',
        path: `src/tp/Psychometric Test Instructions.pdf`,
      }];

      sendEmail(userCreated.email, subject, text, attachments);
    }

    // Token authentication using JWT
    const authtoken = signToken(userCreated.username, userCreated.email, userCreated.org_code);

    // Response
    success = true;
    res.status(201).json(authtoken);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
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
    console.log(`loggin in ${req.body.username}`)
    const { username, password } = req.body;

    const AdminEmail = process.env.ADMIN_EMAIL;

    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
      const authtoken = signToken(username, AdminEmail as string, '6969');

      res.status(200).json({ success: true, userType: 'admin', authtoken });
      return;
    }

    // Finding if user exists
    const user = await User.findOne({
      username: username,
    });
    if (!user) {
      return res.status(400).json({ success, error: 'Please try to login with correct username' });
    }

    // Matching user password
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(400).json({ success, error: 'Please try to login with correct password' });
    }
    console.log('correct password!')
    // Token authentication using JWT
    const authtoken = signToken(user.username, user.email, user.org_code);

    // Response
    success = true;
    res.status(200).json({ success, userType: 'user', authtoken });
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

    const resetLink = `https://yourwebsite.com/reset-password?token=${token}`;

    const subject = 'Password Reset';
    const text = `This link is active only for an hour.\nClick the following link to reset your password: ${resetLink}`;

    sendEmail(email, subject, text);

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
      username: req.body.username,
      email: req.body.email,
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
    res.status(500).json({ success: false, error: error });
  }
}