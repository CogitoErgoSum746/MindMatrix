import express, { Router } from 'express';
import { checkUser, checkout, paymentVerification } from '../controllers/paymentController';

const router: Router = express.Router();

router.post('/checkUser', checkUser);

router.post('/checkout', checkout);

router.post('/paymentverification', paymentVerification);

export default router;
