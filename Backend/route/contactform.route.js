import express from 'express';
import { contactform } from '../controller/contactform.controller.js';

const router = express.Router();

router.post('/contactform', contactform);

export default router;