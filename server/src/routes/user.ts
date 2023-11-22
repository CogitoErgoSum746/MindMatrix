import express, { Router, Request, Response } from 'express';
import { body, check } from 'express-validator';
import { getUser, userDashboard, getTestResults, tektest, makeFinalPdf, checkScore, carreerOptions, checkSubscores, multipleIRank, deleteTestResult, schoolTotalTests, collegeTotalTests, professionalTotalTests, doneCarreerList, deleteCareerList, doneSubTests, getAllTestResults } from '../controllers/UserController';
import fetchUser from '../middlewares/fetchUser';

const router: Router = express.Router(); 

router.get('/getuser', fetchUser, getUser);

router.post('/checkscore', fetchUser, checkScore);

router.post('/checksubscore', fetchUser, checkSubscores);

router.get('/multilpleIRank', fetchUser, multipleIRank); //send a sorted list of multilple intelligence scores

router.get('/schooltotaltests', fetchUser, schoolTotalTests);
router.get('/collegetotaltests', fetchUser, collegeTotalTests);
router.get('/professionaltotaltests', fetchUser, professionalTotalTests);

router.post('/donesubtests', fetchUser, doneSubTests);

router.post('/carreerOptions', fetchUser, carreerOptions);

router.get('/checkcarreerlist', fetchUser, doneCarreerList);

router.post('/testResultToAPI', fetchUser, getTestResults); // One single route for every test result
// just use: {
//   "testType": "",
//   "subCategory": "",
//   "score": "25"
// } for req.body

router.get('/makepdf', fetchUser, makeFinalPdf);


//Debugging routes:

router.get('/dashboard', userDashboard); //Get dashboard
router.get('/tektest', fetchUser, tektest); //soemthing random
router.post('/deletetest', fetchUser, deleteTestResult); //deletetest
router.get('/deletecarlist', fetchUser, deleteCareerList); // delete carlist
router.post('/allthis', fetchUser, getAllTestResults); //used to directly modify the test results
// just use {
//     testResults: yourArrayOfTestResults
// }

export default router;