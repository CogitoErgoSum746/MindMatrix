import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import User from '../models/users'; // Assuming you have a User model
// import { UpdateWriteOpResult } from 'mongoose';
import fs from 'fs';
import path from 'path';
import { sendFeedback, sendUserInfo, sendCharts, sendScores } from './pdfController';
import fetchUser from '../middlewares/fetchUser';
import { resetPassword } from './authController';
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
    console.error('Error sending email:', error);
  }
}

// Example usages
// sendEmail('recipient@example.com');
// sendEmail('recipient@example.com', 'Your Subject');
// sendEmail('recipient@example.com', 'Your Subject', 'Hello, this is the email content.');

export async function getUser(req: Request, res: Response): Promise<void> {
  try {
    // Finding user to fetch
    const user = await User.findOne({
      username: req.user.username,
      email: req.user.email,
    }).select('-password');

    if (!user) {
      res.status(400).json({ error: 'No user found with request object' });
      return;
    }

    // Response
    res.status(200).json({
      status: 'success',
      results: user ? 1 : 0,
      data: {
        user,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

export const userDashboard = (req: Request, res: Response): void => {
  res.status(200).json('Chillaxxx');
};

export async function tektest(req: Request, res: Response): Promise<void> {
  try {
    // const keys = Object.keys(req.body);
    // console.log(keys);
    sendCharts(req, res);
    res.status(200).json('oki');
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal server error' });
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
    console.error('Error updating document:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

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

export async function checkSubscores(req: Request, res: Response): Promise<void> {
  try {
    // Define the filter criteria
    const filter = {
      username: req.user.username,
      email: req.user.email,
    };

    const testType = req.body.testType;

    // Check if a document with the same testType exists
    const existingUser = await User.findOne(filter);

    if (existingUser) {
      // Find the test result with the matching testType
      const testResult = existingUser.testResults.find((result) => result.testType === testType);

      if (testResult) {
        // Find the subcategory with the matching name and get the score
        const subcategories = testResult.subcategories;

        if (subcategories) {
          const general = 8;
          const subcategoryCount = subcategories ? subcategories.length : 0;

          let diffsubs = general - subcategoryCount;

          if (diffsubs == 0) {
            res.status(200).json({ status: true });
            return;
          } else {
            res.status(200).json({ status: false });
            return;
          }
        } else {
          res.status(404).json({ message: 'No subcategories found' });
          return;
        }
      } else {
        res.status(404).json({ message: 'TestType not found' });
        return;
      }
    } else {
      res.status(404).json({ message: 'User not found' });
      return;
    }
  } catch (error) {
    console.error('Error updating document:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

export async function schoolTotalTests(req: Request, res: Response): Promise<void> {
  try {
    // Define the filter criteria
    const filter = {
      username: req.user.username,
      email: req.user.email,
    };

    // Check if a document with the same testType exists
    const existingUser = await User.findOne(filter);

    const testTypes = existingUser?.testResults.map(result => result.testType).filter(Boolean);

    const general: Record<string, number> = {
      "Multiple Intelligence": 8,
      "Study Skills Profile Assessment": 8,
      "Aptitude": 6,
      "Emotional Intelligence": 5,
      "Learning Style": 3,
      "Leadership Style": 4,
      "Competitive State Anxiety Inventory": 3,
      "Students Wheel of Life": 10,
      "Leadership skills": 1,
      "Cyber Dependency": 1,
      "Left-Right Brain Dominance": 2,
      "Personality": 5
    };

    let testTypeCount: Record<string, number> = {};
    let differenceList: Record<string, number> = {};

    if (existingUser?.testResults) {
      existingUser?.testResults.forEach(result => {
        const { testType, subcategories } = result;
        const subcategoryCount = subcategories ? subcategories.length : 0;

        if (testType) {
          if (testTypeCount[testType]) {
            testTypeCount[testType] += subcategoryCount;
          } else {
            testTypeCount[testType] = subcategoryCount;
          }
        }
      });

      // Compare testTypeCount with the general list and calculate the difference
      for (const testType in general) {
        if (general.hasOwnProperty(testType)) {
          const maxCount = general[testType];
          const count = testTypeCount[testType] || 0;
          const difference = maxCount - count;
          differenceList[testType] = difference;
        }
      }

      res.status(200).json({ success: true, differenceList: differenceList });
    } else {
      res.status(404).json({ success: false, error: "Not Found" });
    }
  } catch (error) {
    console.error('Error updating document:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

export async function collegeTotalTests(req: Request, res: Response): Promise<void> {
  try {
    // Define the filter criteria
    const filter = {
      username: req.user.username,
      email: req.user.email,
    };

    // Check if a document with the same testType exists
    const existingUser = await User.findOne(filter);

    const testTypes = existingUser?.testResults.map(result => result.testType).filter(Boolean);

    const general: Record<string, number> = {
      "Multiple Intelligence": 8,
      "Study Skills Profile Assessment": 8,
      "Aptitude": 6,
      "Emotional Intelligence": 5,
      "Learning Style": 3,
      "Leadership Style": 4,
      "Competitive State Anxiety Inventory": 3,
      "Students Wheel of Life": 10,
      "Leadership skills": 1,
      "Cyber Dependency": 1,
      "Left-Right Brain Dominance": 2,
      "Personality": 5
    };

    let testTypeCount: Record<string, number> = {};
    let differenceList: Record<string, number> = {};

    if (existingUser?.testResults) {
      existingUser?.testResults.forEach(result => {
        const { testType, subcategories } = result;
        const subcategoryCount = subcategories ? subcategories.length : 0;

        if (testType) {
          if (testTypeCount[testType]) {
            testTypeCount[testType] += subcategoryCount;
          } else {
            testTypeCount[testType] = subcategoryCount;
          }
        }
      });

      // Compare testTypeCount with the general list and calculate the difference
      for (const testType in general) {
        if (general.hasOwnProperty(testType)) {
          const maxCount = general[testType];
          const count = testTypeCount[testType] || 0;
          const difference = maxCount - count;
          differenceList[testType] = difference;
        }
      }

      res.status(200).json({ success: true, differenceList: differenceList });
    } else {
      res.status(404).json({ success: false, error: "Not Found" });
    }
  } catch (error) {
    console.error('Error updating document:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

export async function professionalTotalTests(req: Request, res: Response): Promise<void> {
  try {
    // Define the filter criteria
    const filter = {
      username: req.user.username,
      email: req.user.email,
    };

    // Check if a document with the same testType exists
    const existingUser = await User.findOne(filter);

    const testTypes = existingUser?.testResults.map(result => result.testType).filter(Boolean);

    const general: Record<string, number> = {
      "Multiple Intelligence": 8,
      "Study Skills Profile Assessment": 8,
      "Aptitude": 6,
      "Emotional Intelligence": 5,
      "Learning Style": 3,
      "Leadership Style": 4,
      "Competitive State Anxiety Inventory": 3,
      "Students Wheel of Life": 10,
      "Leadership skills": 1,
      "Cyber Dependency": 1,
      "Left-Right Brain Dominance": 2,
      "Personality": 5
    };

    let testTypeCount: Record<string, number> = {};
    let differenceList: Record<string, number> = {};

    if (existingUser?.testResults) {
      existingUser?.testResults.forEach(result => {
        const { testType, subcategories } = result;
        const subcategoryCount = subcategories ? subcategories.length : 0;

        if (testType) {
          if (testTypeCount[testType]) {
            testTypeCount[testType] += subcategoryCount;
          } else {
            testTypeCount[testType] = subcategoryCount;
          }
        }
      });

      // Compare testTypeCount with the general list and calculate the difference
      for (const testType in general) {
        if (general.hasOwnProperty(testType)) {
          const maxCount = general[testType];
          const count = testTypeCount[testType] || 0;
          const difference = maxCount - count;
          differenceList[testType] = difference;
        }
      }

      res.status(200).json({ success: true, differenceList: differenceList });
    } else {
      res.status(404).json({ success: false, error: "Not Found" });
    }
  } catch (error) {
    console.error('Error updating document:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

export async function checkScore(req: Request, res: Response): Promise<void> {
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
      // Find the test result with the matching testType
      const testResult = existingUser.testResults.find((result) => result.testType === testType);

      if (testResult) {
        // Find the subcategory with the matching name and get the score
        const subcategory = testResult.subcategories.find((sub) => sub.name === subCategory);

        if (subcategory) {
          const score = subcategory.score;
          res.status(200).json({ score });
          return;
        } else {
          res.status(404).json({ message: 'Subcategory not found' });
          return;
        }
      } else {
        res.status(404).json({ message: 'TestType not found' });
        return;
      }
    } else {
      res.status(404).json({ message: 'User not found' });
      return;
    }
  } catch (error) {
    console.error('Error updating document:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

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
    res.status(500).json({ success: false, error: error });
  }
};

export async function makeFinalPdf(req: Request, res: Response): Promise<void> {
  try {

    const username = req.user.username;
    const email = req.user.email;

    // Extract the first 5 letters from 'username' and 'email'
    const usernameFirst5 = username.slice(0, 5);
    const emailFirst5 = email.slice(0, 5);

    // Create the custom folder inside the "runningPdfs" folder
    const customFolderPath = path.join(__dirname, '..', 'runningPdfs', `${usernameFirst5}${emailFirst5}`);
    if (!fs.existsSync(customFolderPath)) {
      fs.mkdirSync(customFolderPath, { recursive: true });
    }

    const pdfFileName = 'feedback.pdf'; // Change this to your PDF file name
    // Check if the feedback.pdf already exists in the custom folder
    const destiPdfPath = path.join(customFolderPath, pdfFileName);
    if (fs.existsSync(destiPdfPath)) {
      await sendPdfToEmail(req, res);
      res.status(200).json({ success: true });
      return;
    }
    // Copy the PDF file to the custom folder
    const sourceFolderPath = path.join(__dirname, '..', 'tp'); // Go up one level to access 'tp'
    const sourcePdfPath = path.join(sourceFolderPath, 'yay.pdf');


    const destinationPdfPath = path.join(customFolderPath, pdfFileName);
    fs.copyFileSync(sourcePdfPath, destinationPdfPath);

    await sendUserInfo(req, res);

    await sendCharts(req, res);

    await sendScores(req, res);

    await sendFeedback(req, res);

    await sendPdfToEmail(req, res);

    res.status(200).json({ success: true });
  } catch (error) {
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

    const result = await User.findOneAndUpdate(filter, { carreerOptions: paths }, { new: true });

    if (result) {
      // The update happened and a document was modified.
      res.status(200).json({ success: true });
      return;
    } else {
      res.status(404).json({ success: false, error: 'Document not found and not updated' });
      return;
    }

  } catch (error) {
    // Handle any other errors that might occur during the try block
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }

}

export async function doneCarreerList(req: Request, res: Response): Promise<void> {
  try {
    const filter = {
      username: req.user.username,
      email: req.user.email,
    };

    // Check if a document with the same testType exists
    const existingUser = await User.findOne(filter);

    const carreerOptions = existingUser?.carreerOptions;

    if (carreerOptions) {
      if (carreerOptions.length > 0) {
        res.status(200).json({ status: true });
        return;
      } else {
        res.status(200).json({ status: false });
        return;
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
}

export async function multipleIRank(req: Request, res: Response): Promise<void> {
  try {
    // Define the filter criteria
    const filter = {
      username: req.user.username,
      email: req.user.email,
    };

    const testType = "Multiple Intelligence";

    // Check if a document with the same testType exists
    const existingUser = await User.findOne(filter);

    if (existingUser) {
      // Find the test result with the matching testType
      const testResult = existingUser.testResults.find((result) => result.testType === testType);

      if (testResult) {
        // Find the subcategory with the matching name and get the score
        const subcategories = testResult.subcategories;

        if (subcategories) {
          const customSort = (arr: any) => {
            return arr.reduce((sorted: any, item: any) => {
              const index = sorted.findIndex((el: any) => item.score > el.score);
              if (index === -1) {
                sorted.push(item);
              } else {
                sorted.splice(index, 0, item);
              }
              return sorted;
            }, []);
          };

          const sortedSubcategories = customSort(subcategories);
          const sortedNames = sortedSubcategories.map((subcategory: any) => subcategory.name);

          res.status(200).json({ sortedNames });
          return;
        } else {
          res.status(404).json({ message: 'No subcategories found' });
          return;
        }
      } else {
        res.status(404).json({ message: 'TestType not found' });
        return;
      }
    } else {
      res.status(404).json({ message: 'User not found' });
      return;
    }
  } catch (error) {
    console.error('Error updating document:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
}

export async function schoolSubTests(req: Request, res: Response): Promise<void> {
  try {
    // Define the filter criteria
    const filter = {
      username: req.user.username,
      email: req.user.email,
    };

    // Check if a document with the same testType exists
    const existingUser = await User.findOne(filter);

    const bodyTestType = req.body.testType;

    const testTypes = existingUser?.testResults.map(result => result.testType).filter(Boolean);

    const general: Record<string, Array<string>> = {
      "Aptitude": ["Linguistic", "Numerical", "Mechanical", "Abstract", "Spatial", "Logical"],
      "Study Skills Profile Assessment": ["Time Management and Procrastination", "Concentration and Memory", "Study Aids and Note-Taking", "Test Strategies and Test Anxiety", "Organizing and Processing Information", "Motivation and Attitude", "Reading and Selecting the Main Idea", "Writing"],
      "Students Wheel of Life": ["Academic Competency", "Health & Fitness", "Social Friends", "Discipline", "Good Manners", "Spirituality", "Goal Orientation", "Confidence", "Responsible", "Hobbies & Extracurriculars"],
      "Left-Right Brain Dominance": ["Right Brain","Left Brain"],
      "Personality": ["Openness", "Conscientiousness", "Extroversion", "Agreeableness", "Neuroticism"],
      "Multiple Intelligence": ["Linguistic", "Logical", "Spatial", "Interpersonal", "Musical", "Naturalistic","Intrapersonal", "Kinesthetic"],
      "Emotional Intelligence": ["Self-Awareness", "Managing Emotions", "Motivating Oneself", "Empathy", "Social Skill"],
      "Learning Style": ["Visual", "Auditory", "Kinesthetic"],
      "Leadership skills": ["Leadership"],
      "Leadership Style": ["Authoritative", "Democratic", "Facilitative", "Situational"],
      "Cyber Dependency": ["Cyber Dependency"],
      "Competitive State Anxiety Inventory": ["Cognitive Anxiety", "Somatic Anxiety", "Self-Confidence"]
    };

    const finalArray: number[] = [];

    if (existingUser) {
      // Find the test result with the matching testType
      const testResult = existingUser.testResults.find((result) => result.testType === bodyTestType);
      const theList = general[bodyTestType];

      if (testResult && theList) {
        theList.forEach(sub => {
          const foundSubcategory = testResult.subcategories.find((subcategory) => subcategory.name === sub);

          if (foundSubcategory) {
            finalArray.push(1);
          } else {
            finalArray.push(0);
          }
        });
      } else {
        res.status(404).json({ message: 'TestType not found' });
        return;
      }
    } else {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).json({ success: true, finalArray: finalArray });
  } catch (error) {
    console.error('Error updating document:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};
