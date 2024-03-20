import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import User from '../../models/orgUsers'; // Assuming you have a User model
// import { UpdateWriteOpResult } from 'mongoose';
import fs from 'fs';
import fsextra from 'fs-extra';
import path from 'path';
import { sendFeedback, sendUserInfo, sendCharts, sendScores } from '../pdfController';
import { errorLogger, appLogger } from '../../logger';
// import { signToken } from '../utils/token';
// import { validationResult } from 'express-validator';

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
    errorLogger.error(`Error sending email to user:`, error instanceof Error ? error.message : error);
    console.error('Error sending email:', error);
  }
}

// Example usages
// sendEmail('recipient@example.com');
// sendEmail('recipient@example.com', 'Your Subject');
// sendEmail('recipient@example.com', 'Your Subject', 'Hello, this is the email content.');

export async function completeProfile(req: Request, res: Response): Promise<void> {
  try {
    // Define the filter criteria
    const filter = {
      username: req.user.username,
      email: req.user.email,
    };

    const gender = req.body.gender;
    const address = req.body.address;
    const contact: string = req.body.contact;

    const contactNumber: number = parseInt(contact, 10);

    // Check if a document with the same testType exists
    const existingUser = await User.findOne(filter);

    if (existingUser) {
      await existingUser.updateOne({ gender: gender, address: address, contact: contactNumber });
      res.status(200).json({ success: true });
    } else {
      // If the user document doesn't exist, handle accordingly
      console.log("User not found");
      res.status(404).json({ success: false, error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getTestResults(req: Request, res: Response): Promise<void> {
  try {
    // Define the filter criteria
    const filter = {
      username: req.user.username,
      email: req.user.email,
    };

    const testType = req.body.testType;
    const subCategory = req.body.subCategory;
    const score = req.body.score;

    // Check if a document with the same testType exists
    const existingUser = await User.findOne(filter);

    if (existingUser) {
      // Document with the same testType exists, find it and push the subcategory
      const testResultToUpdate = existingUser.testResults.find(
        (result) => result.testType === testType
      );

      if (testResultToUpdate) {
        testResultToUpdate.subcategories.push({ name: subCategory, score: score });
      } else {
        // If there's no existing testResult for this testType, create a new one
        existingUser.testResults.push({
          testType: testType,
          subcategories: [{ name: subCategory, score: score }],
        });
      }

      // Save the updated document
      await existingUser.save();

      res.status(200).json({ success: true });
      return;
    } else {
      // If the user document doesn't exist, handle accordingly
      console.log("User not found");
      res.status(404).json({ success: false, error: "User not found" });
    }

    // if (results.acknowledged && results.modifiedCount > 0) {
    //   console.log('Document updated successfully');
    //   res.status(200).json({ success: true });
    // } else {
    //   console.log('Document not found or not updated');
    //   res.status(404).json({ success: false, error: 'Document not found or not updated' });
    // };

  } catch (error) {
    errorLogger.error(`Error sending testResults:`, error instanceof Error ? error.message : error);
    console.error('Error updating document:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

export async function getAllTestResults(req: Request, res: Response): Promise<void> {
  try {
    // Define the filter criteria
    const filter = {
      username: req.user.username,
      email: req.user.email,
    };

    const results = req.body.testResults;

    // Check if a document with the same testType exists
    const existingUser = await User.findOne(filter);

    if (existingUser) {
      await existingUser.updateOne({ testResults: results });
      res.status(200).json({ success: true });
    } else {
      // If the user document doesn't exist, handle accordingly
      console.log("User not found");
      res.status(404).json({ success: false, error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function deleteTestResult(req: Request, res: Response): Promise<void> {
  try {
    // Define the filter criteria
    const filter = {
      username: req.user.username,
      email: req.user.email,
    };

    const testType = req.body.testType;
    const subCategory = req.body.subCategory;

    // Check if a document with the same testType exists
    const existingUser = await User.findOne(filter);

    if (existingUser) {
      // Document with the same testType exists, find it
      const testResultToUpdate = existingUser.testResults.find(
        (result) => result.testType === testType
      );

      if (testResultToUpdate) {
        // Find the subcategory by name and remove it
        const subcategoryIndex = testResultToUpdate.subcategories.findIndex(
          (subcategory) => subcategory.name === subCategory
        );

        if (subcategoryIndex !== -1) {
          testResultToUpdate.subcategories.splice(subcategoryIndex, 1);

          // Save the updated document
          await existingUser.save();

          res.status(200).json({ success: true });
          return;
        }
      }

      // If the subcategory was not found, handle accordingly
      console.log("Subcategory not found");
      res.status(404).json({ success: false, error: "Subcategory not found" });
    } else {
      // If the user document doesn't exist, handle accordingly
      console.log("User not found");
      res.status(404).json({ success: false, error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function deletepdf(req: Request, res: Response): Promise<any> {
  try {
    const username = req.user.username
    const email = req.user.email

    const existinguser = await User.findOne({
      username: username,
      email: email
    })

    if (existinguser) {
      // Extract the first 5 letters from 'username' and 'email'
      const usernameFirst5 = username.slice(0, 5);
      const emailFirst5 = email.slice(0, 5);

      // Combine the first 5 letters of 'username' and 'email' to create a custom folder name
      const customFolderName = `${usernameFirst5}${emailFirst5}`;
      const folderPath = `src/runningPdfs/${customFolderName}`;

      if (fs.existsSync(folderPath)) {
        fsextra.remove(folderPath, (err) => {
          if (err) {
            console.error('Error deleting the folder:', err);
          }
        });
      }

      res.status(200).json({ success: true });
    } else {
      res.status(404).json({ success: false, message: 'User not found' });
    }
  } catch (error) {
    errorLogger.error(`Error deleting a user:`, error instanceof Error ? error.message : error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function deleteCareerList(req: Request, res: Response): Promise<void> {
  try {
    // Define the filter criteria
    const filter = {
      username: req.user.username,
      email: req.user.email,
    };

    // Check if a document with the same testType exists
    const existingUser = await User.findOne(filter);

    if (existingUser) {
      await existingUser.updateOne({ carreerOptions: [] });
      res.status(200).json({ success: true });
    } else {
      // If the user document doesn't exist, handle accordingly
      console.log("User not found");
      res.status(404).json({ success: false, error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

async function sendPdfToEmail(req: Request, res: Response): Promise<void> {
  try {
    const username = req.user.username
    const email = req.user.email

    // Extract the first 5 letters from 'username' and 'email'
    const usernameFirst5 = username.slice(0, 5);
    const emailFirst5 = email.slice(0, 5);

    // Combine the first 5 letters of 'username' and 'email' to create a custom folder name
    const customFolderName = `${usernameFirst5}${emailFirst5}`;
    const filePath = `src/runningPdfs/${customFolderName}/feedback.pdf`;

    const subject = "Psychometric Test Report";
    const text = `Dear ${username}!\n\nSharing with you the psychometric test report.  Attached is a comprehensive report that explores multiple facets of your personality, offers career recommendations, identifies your strengths, and points out areas for potential growth.\n\nWe highly encourage you to set aside some dedicated time for a thorough review of the report, allowing yourself the opportunity to reflect deeply on the valuable insights it offers. This information can be a valuable tool on your journey of self-discovery and personal development.\n\nIf you have any queries or require any assistance in understanding your results or setting goals based on them, please do not hesitate to reach out to us. Our team is here to support you in making the most of this valuable resource.\n\nThank you for choosing us as your trusted partner in self-discovery. We look forward to accompanying you on your path to personal growth and self-awareness.\n\nWarm regards,\n\nDr. Antony Augusthy`;
    const attachments = [{
      filename: `${username}.pdf`,
      path: filePath,
    }];

    await sendEmail(email, subject, text, attachments);

    // res.status(200).json({ success: true });
  } catch (error) {
    errorLogger.error(`Error sending pdf to mail:`, error instanceof Error ? error.message : error);
    res.status(500).json({ success: false, error: error });
  }
};

export async function makeFinalPdf(req: Request, res: Response): Promise<void> {
  try {

    const username = req.user.username;
    const email = req.user.email;

    const existinguser = await User.findOne({
      username: username,
      email: email
    });

    const studentType = existinguser?.studentType;

    // Copy the PDF file to the custom folder
    const sourceFolderPath = path.join(__dirname, '..', '..', 'tp'); // Go up one level to access 'tp'

    let sourcePdfPath = "";
    if (studentType === "High school") {
      sourcePdfPath = path.join(sourceFolderPath, `High-School.pdf`);
    } else if (studentType === "College") {
      sourcePdfPath = path.join(sourceFolderPath, `College.pdf`);
    } else if (studentType === "Professional") {
      sourcePdfPath = path.join(sourceFolderPath, `Professional.pdf`);
    }

    // Extract the first 5 letters from 'username' and 'email'
    const usernameFirst5 = username.slice(0, 5);
    const emailFirst5 = email.slice(0, 5);

    // Create the custom folder inside the "runningPdfs" folder
    const customFolderPath = path.join(__dirname, '..', '..', 'runningPdfs', `${usernameFirst5}${emailFirst5}`);
    if (!fs.existsSync(customFolderPath)) {
      await fs.promises.mkdir(customFolderPath, { recursive: true });
    }

    const pdfFileName = 'feedback.pdf'; // Change this to your PDF file name
    // Check if the feedback.pdf already exists in the custom folder
    const destiPdfPath = path.join(customFolderPath, pdfFileName);
    if (fs.existsSync(destiPdfPath)) {
      await sendPdfToEmail(req, res);
      res.status(200).json({ success: true });
      return;
    }
    fs.copyFileSync(sourcePdfPath, destiPdfPath);
    // await fs.promises.copyFile(sourcePdfPath, destiPdfPath);

    await sendUserInfo(req, res, studentType as string);

    await sendCharts(req, res, studentType as string);

    await sendScores(req, res, studentType as string);

    await sendFeedback(req, res, studentType as string);

    await sendPdfToEmail(req, res);

    res.status(200).json({ success: true });
  } catch (error) {
    errorLogger.error(`Error with the makepdf route:`, error instanceof Error ? error.message : error);
    console.log(error);
    res.status(500);
  }
}

export async function carreerOptions(req: Request, res: Response): Promise<void> {
  try {
    const filter = {
      username: req.user.username,
      email: req.user.email,
    };

    const paths = req.body.careerOptions;
    const otherOptions = req.body.others;

    const result = await User.findOneAndUpdate(filter, { carreerOptions: paths, otherOptions: otherOptions }, { new: true });

    if (result) {
      res.status(200).json({ success: true });
      return;
    } else {
      res.status(404).json({ success: false, error: 'Document not found and not updated' });
      return;
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }

}