import express, { Router, Request, Response } from 'express';
import { body } from 'express-validator';
import { createOrganization, adminDashboard, deleteUserCarList, getAllOrg, getUserInfo, getUsersOrg, getAllDirectUsers, sendCodetoEmail, getTotalPdfs, deleteUser, deleteOrgAlongWithUsers, displayPdf} from '../controllers/adminController';
import fetchUser from '../middlewares/fetchUser';

const router: Router = express.Router();

router.post('/createorg',[
    body('orgi_name', 'Enter a valid name').isLength({ min: 3 }),
  body('orgi_email', 'Enter a valid email').isEmail(),
], createOrganization);

router.get('/getallorgs', getAllOrg);

// router.post('/getorg', getOrganization);

router.post('/getusersorg', getUsersOrg);

router.get('/getalldirectusers', getAllDirectUsers);

router.get('/getpdfs', getTotalPdfs);

router.post('/getuserinfo', getUserInfo);

router.post('/deleteorg', deleteOrgAlongWithUsers);

router.post('/deleteuser', deleteUser);

router.post('/deleteusercarlist', deleteUserCarList);

router.post('/displaypdf', displayPdf); //validation

router.get('/dashboard', adminDashboard);

router.post('/sendcodetoemail', sendCodetoEmail);

export default router;