import express, { Router, Request, Response, NextFunction } from 'express';
import { body, check, validationResult } from 'express-validator';
import { login, createUser, forgotPassword, resetPassword, createDirectUser, checkRandomNumber } from '../controllers/authController';

const router: Router = express.Router();

// Validation middleware for checking if errors occurred during validation
const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const allowedStudentTypes: string[] = ['High school', 'College', 'Professional'];

const validateStudentType = (value: string) => {
  if (!allowedStudentTypes.includes(value)) {
    throw new Error('Invalid student type');
  }
  return true;
};

router.post('/createuser', [
  body('username', 'Username should contain at least 5 characters').isLength({ min: 5 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password should contain at least 5 characters').isLength({ min: 5 }),
  body('studentType').custom(validateStudentType),
  body('age', 'Age should be a number').isInt(),
  body('organization_code').isLength({ min: 4, max: 4 }).withMessage('Code should be 4 characters long'),
], validate, createUser);

router.post('/createdirectuser', [
  body('username', 'Username should contain at least 5 characters').isLength({ min: 5 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password should contain at least 5 characters').isLength({ min: 5 }),
  body('age', 'Age should be a number').isInt(),
], validate, createDirectUser);

router.post('/login', [
    // body('email', "Enter a valid email").isEmail(),
    body('username', "Username cannot be blank").exists(),
    body('password', "Password cannot be blank").exists(),
    body('inOrganization'),
], validate, login);

router.post('/checkRandomNumber', [
  body('randomNumber', "Not a valid randomNumber").exists(),
], validate, checkRandomNumber);

router.post('/forgotpassword', [
  body('email', "Enter a valid email").isEmail(),
], validate, forgotPassword);

router.post('/resetpassword', [
  body('newPassword', 'Password should contain at least 5 characters').isLength({ min: 5 }),
], validate, resetPassword);

export default router;