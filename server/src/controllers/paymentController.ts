import { config } from "dotenv";
config();

import { Request, Response } from 'express';
import { instance } from '../utils/razorpayInstance';
import crypto from 'crypto';
import { validationResult } from 'express-validator';
import PaymentUsers from '../models/paymentUsers';
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

interface PaymentVerificationRequest extends Request {
  body: {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
    name: string;
    email: string;
    age: number;
    contact: string;
    studentType: string;
  };
}

export const checkUser = async (req: Request, res: Response) => {
  try {
    // If there are validation errors return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, email, age, contact } = req.body;

    const user = await PaymentUsers.findOne({ username: name, email: email, age: age, contact: contact });
    if (user) {
      return res.status(400).json({ success: false, error: "User has already done payment" });
    } else {
      res.status(200).json({
        success: true
      });
    }
  } catch (error) {
    console.error('Error in checkout:', error);
    res.status(500).json({ success: false, error: 'An error occurred during checkUser.' });
  }
};


export const checkout = async (req: Request, res: Response) => {
  try {
    const options = {
      amount: Number(req.body.amount * 100),
      currency: 'INR',
    };
    const order = await instance.orders.create(options);

    res.status(200).json({
      success: true,
      api_key: process.env.RAZORPAY_API_KEY,
      order,
    });
  } catch (error) {
    console.error('Error in checkout:', error);
    res.status(500).json({ success: false, error: 'An error occurred during checkout.' });
  }
};


export const paymentVerification = async (
  req: PaymentVerificationRequest,
  res: Response
) => {
  // If there are validation errors return bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const { name, email, age, contact, studentType, razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const body = razorpay_order_id + '|' + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_APT_SECRET as string)
      .update(body.toString())
      .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {

      const userCreated = await PaymentUsers.create({
        username: name,
        email: email,
        age: age,
        contact: contact,
        studentType: studentType,
        razorpay_payment_id: razorpay_payment_id,
        razorpay_order_id: razorpay_order_id,
        razorpay_signature: razorpay_signature
      });

      if (userCreated) {
        res.status(200).json({ success: true });
      }

      const subject = "Welcome to the Psychometric Test Journey";
      const text = `Dear ${userCreated.username},\n\nWe're happy to welcome you on board our psychometric test program.\n\nClick on the link to proceed your registration: https://successteps.in/register/${userCreated.razorpay_order_id}/?studentType=${userCreated.studentType}\n\nWarm regards,\n\nDr. Antony Augusthy`;

      sendEmail(userCreated.email, subject, text);

    } else {
      res.status(400).json({
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};