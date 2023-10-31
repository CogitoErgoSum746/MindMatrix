import express, { Router, Request, Response } from 'express';
import { body, check } from 'express-validator';
import { getUser, userDashboard, getTestResults, tektest, makeFinalPdf, checkScore, carreerOptions, checkSubscores, multipleIRank, deleteTestResult, schoolTotalTests, collegeTotalTests, professionalTotalTests, doneCarreerList, schoolSubTests } from '../controllers/UserController';
import fetchUser from '../middlewares/fetchUser';

const router: Router = express.Router();

router.get('/dashboard', userDashboard);

router.get('/getuser', fetchUser, getUser);

router.post('/checkscore', fetchUser, checkScore);

router.post('/checksubscore', fetchUser, checkSubscores);

router.get('/multilpleIRank', fetchUser, multipleIRank);

router.get('/schooltotaltests', fetchUser, schoolTotalTests);
router.get('/collegetotaltests', fetchUser, collegeTotalTests);
router.get('/professionaltotaltests', fetchUser, professionalTotalTests);

router.post('/schoolsubtests', fetchUser, schoolSubTests);

router.get('/tektest', fetchUser, tektest);

router.post('/carreerOptions', fetchUser, carreerOptions);

router.get('/checkcarreerlist', fetchUser, doneCarreerList);

router.post('/testResultToAPI', fetchUser, getTestResults); // One single route for every test result
// just use: {
//   "testType": "",
//   "subCategory": "",
//   "score": "25"
// } for req.body

router.post('/deletetest', fetchUser, deleteTestResult);

router.get('/makepdf', fetchUser, makeFinalPdf);

export default router;