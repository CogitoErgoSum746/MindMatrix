import Razorpay from 'razorpay';

interface RazorpayOptions {
  key_id: string;
  key_secret: string;
}

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY as string,
  key_secret: process.env.RAZORPAY_APT_SECRET as string,
} as RazorpayOptions);
