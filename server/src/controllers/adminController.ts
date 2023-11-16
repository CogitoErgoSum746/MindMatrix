import { Request, Response } from 'express';
import Organization from '../models/organizations';
import nodemailer from 'nodemailer';
import User from '../models/users';
import { signToken } from '../utils/token';
import { validationResult } from 'express-validator';
import fs from 'fs';
import fsextra from 'fs-extra';
import path from 'path';
import OrganizationModel from '../models/organizations';
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
    errorLogger.error(`Error sending email to organiztion:`, error instanceof Error ? error.message : error);
    console.error('Error sending email:', error);
  }
}

// Example usages
// sendEmail('recipient@example.com');
// sendEmail('recipient@example.com', 'Your Subject');
// sendEmail('recipient@example.com', 'Your Subject', 'Hello, this is the email content.');

export async function createOrganization(req: Request, res: Response): Promise<any> {
  let success = false;

  // If there are validation errors, return a bad request with the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { orgi_name, orgi_email, orgi_studentType } = req.body;

    const generatedCodes = new Set();
    const organizations = await Organization.find({});

    organizations.forEach((org) => {
      generatedCodes.add(org.org_code);
    });
    const charset = '0123456789';
    // Create num_ids usernames for the organization and save them

    let orgi_code = '';
    do {
      orgi_code = '';
      for (let j = 0; j < 4; j++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        orgi_code += charset.charAt(randomIndex);
      }
    } while (generatedCodes.has(orgi_code)); // Check if the code already exists

    generatedCodes.add(orgi_code);

    //check if organization exists
    let org = await Organization.findOne({ org_name: orgi_name, org_studentType: orgi_studentType});
    if (org) {
      return res.status(404).json({ success, error: "organization configuration already exists" });
    }

    // Create and save a new user document
    const Org = new Organization({
      org_name: orgi_name,
      org_email: orgi_email,
      org_studentType: orgi_studentType,
      org_code: orgi_code,
    });
    await Org.save();

    appLogger.info(`Organization registered: ${Org.org_name}`);
    // Response
    success = true;
    res.status(201).json({ success });
  } catch (error) {
    errorLogger.error(`Error creating organization:`, error instanceof Error ? error.message : error);
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

export async function getAllOrg(req: Request, res: Response): Promise<any> {
  let success = false;
  try {
    // Create and save a new user document
    const orgs = await Organization.find(); // Fetch all documents from the 'users' collection

    // Response
    success = true;
    res.status(201).json({ success, orgs });
  } catch (error) {

    console.error(error);
    res.status(500).send('Internal server error');
  }
};

export async function getUsersOrg(req: Request, res: Response): Promise<any> {
  try {
    const { org_name, org_studentType, org_code } = req.body;

    const usersPerOrg = await User.find({ studentType: org_studentType, org_code: org_code });
    const Org = await Organization.findOne({ org_name: org_name, org_studentType: org_studentType, org_code: org_code});

    if (!usersPerOrg) {
      res.status(404).send('No users found');
      return;
    }

    const totalUsers = usersPerOrg.length;

    res.status(200).json({ Org, usersPerOrg, totalUsers });
  } catch (error) {
    errorLogger.error(`Error getting the orgUsers:`, error instanceof Error ? error.message : error);
    console.error('Error finding users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function deleteOrgAlongWithUsers(req: Request, res: Response): Promise<any> {
  try {
    const { org_name, org_email, org_studentType, org_code } = req.body;

    const usersPerOrg = await User.find({ studentType: org_studentType, org_code: org_code });

    if (usersPerOrg.length > 0) {
      usersPerOrg.forEach(async user => {
        await User.findOneAndDelete({
          username: user.username,
          email: user.email
        });

        const usernameFirst5 = user.username.slice(0, 5);
        const emailFirst5 = user.email.slice(0, 5);

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
      });
    }

    const org = await OrganizationModel.findOneAndDelete({
      org_name: org_name,
      org_email: org_email,
      org_code: org_code
    });

    appLogger.info(`Organization DELETED: ${org?.org_name}`);

    res.status(200).json({ success: true });
  } catch (error) {
    errorLogger.error(`Error deleting the organization:`, error instanceof Error ? error.message : error);
    console.error('Error finding users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function getTotalPdfs(req: Request, res: Response): Promise<any> {
  try {
    const runningPdfsFolderPath = path.join(__dirname, '..', 'runningPdfs');

    const uniqueFolders = new Set();
    let counts = 0;

    fs.readdir(runningPdfsFolderPath, (err, files) => {
      if (err) {
        console.error('Error reading directory:', err);
        return;
      }

      // Iterate through the files in the directory
      files.forEach((file) => {
        const filePath = path.join(runningPdfsFolderPath, file);

        // Check if the file is a directory
        if (fs.statSync(filePath).isDirectory()) {
          uniqueFolders.add(file);
        }
      });

      res.status(200).json({ success: true, numberOfUniqueFolders: uniqueFolders.size });
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
}

export async function getUserInfo(req: Request, res: Response): Promise<any> {
  try {
    const { username, email } = req.body;

    const user = await User.find({
      username: username,
      email: email
    }).select('-_id -password');

    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function deleteUser(req: Request, res: Response): Promise<any> {
  try {
    const { username, email } = req.body;

    const existinguser = await User.findOneAndDelete({
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

      appLogger.info(`User DELETED: ${existinguser.username}`);

      res.status(200).json({ success: true});
    } else {
      res.status(404).json({ success: false, message: 'User not found' });
    }
  } catch (error) {
    errorLogger.error(`Error deleting a user:`, error instanceof Error ? error.message : error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function displayPdf(req: Request, res: Response): Promise<any> {
  try {
    const { username, email} = req.body;

    const existinguser = await User.find({
      username: username,
      email: email
    })

    if (existinguser) {
      // Extract the first 5 letters from 'username' and 'email'
      const usernameFirst5 = username.slice(0, 5);
      const emailFirst5 = email.slice(0, 5);

      // Combine the first 5 letters of 'username' and 'email' to create a custom folder name
      const customFolderName = `${usernameFirst5}${emailFirst5}`;
      const filePath = `src/runningPdfs/${customFolderName}/feedback.pdf`;

      // Check if the file exists
      if (!fs.existsSync(filePath)) {
        return res.status(404).send('File not found/created');
      }

      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.status(500).send('Error reading the PDF file');
        } else {
          res.setHeader('Content-Type', 'application/pdf');
          res.setHeader('Content-Disposition', 'inline; filename="feedback.pdf"');
          res.status(200).send(data);
        }
      });
      
    } else {
      res.status(404).json({ success: false, message: 'User not found' });
    }
  } catch (error) {
    errorLogger.error(`Error displaying the pdf:`, error instanceof Error ? error.message : error);
    console.error('Internal server error:', error);
    res.status(500).json({ error: 'Internal server error', erroris: error });
  }
}

export async function getOrganization(req: Request, res: Response): Promise<any> {
  let success = false;

  // If there are validation errors, return a bad request with the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { orgi_name, orgi_code } = req.body;

    // Create and save a new user document
    const Orgi = await Organization.findOne({
      org_name: orgi_name,
      org_code: orgi_code,
    })

    if (!Orgi) {
      return res.status(400).json({ success, error: 'Please try with correct stuff' });
    }

    // Response
    success = true;
    res.status(201).json({ success, Orgi });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

export const adminDashboard = (req: Request, res: Response): void => {
  res.status(200).json('Chillaxxx admin');
};

export async function sendCodetoEmail(req: Request, res: Response): Promise<void> {
  try {
    const org = await Organization.findOne({
      org_name: req.body.org_name,
      org_email: req.body.org_email,
      org_studentType: req.body.org_studentType,
    }).select('-_id');

    if (!org) {
      res.status(404).json({ message: 'organization not found' });
      return;
    }
    const disCode = org.org_code;

    const email = org.org_email;
    const subject = "Psychometric Test Organizational Code";
    const text = `Dear Sir/Ma’am from ${org.org_name},\n\nWe are delighted to announce that we are fully prepared to commence the implementation of the Psychometric Test Suite program at your prestigious institution.\n\nAs part of this process, we are sharing with you a unique organizational code: ${disCode}.\nThe candidates must input this code in order to gain access to the test.\n\nPlease note that this code is strictly meant for those who have successfully completed their test registration. It is of utmost importance that this code remains confidential and not to be shared with anyone else.\n\nIf you have any queries, please feel free to reach out to us.\n\nWarm regards,\n\nDr. Antony Augusthy`;
    const attachments = [{
      filename: 'Psychometric Test Instructions.pdf',
      path: `src/tp/Psychometric Test Instructions.pdf`,
    }];

    await sendEmail(email, subject, text, attachments);

    res.status(200).json({ success: true });

  } catch (error) {
    errorLogger.error(`Error sending org_code email to organiztion:`, error instanceof Error ? error.message : error);
    res.status(500).json({ success: false, error: error });
  }
};

