import express, { Router, Request, Response } from 'express';
import { body } from 'express-validator';
import { createOrganization, adminDashboard, getOrganization, getAllOrg, getUserInfo, getUsersOrg, sendCodetoEmail, getTotalPdfs, downloadPdf} from '../controllers/adminController';
import fetchUser from '../middlewares/fetchUser';

const router: Router = express.Router();

router.post('/createorg',[
    body('orgi_name', 'Enter a valid name').isLength({ min: 3 }),
  body('orgi_email', 'Enter a valid email').isEmail(),
], createOrganization);

router.get('/getallorgs', getAllOrg);

router.post('/getorg', getOrganization);

router.post('/getusersorg', getUsersOrg);

router.get('/getpdfs', getTotalPdfs);

router.post('/getuserinfo', getUserInfo);

router.post('/downloadpdf', downloadPdf); //validation

router.get('/dashboard', adminDashboard);

router.post('/sendcodetoemail', sendCodetoEmail);

export default router;