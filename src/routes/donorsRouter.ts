import express from 'express'
import { resData } from '../controller/resData';
import { resDonates } from '../controller/resDonatesBy';
import { authenticateToken } from '../auth/authenticateToken';

const router = express.Router();

router.get('/allDonors', resData)

router.get('/:donates', resDonates)
export default router