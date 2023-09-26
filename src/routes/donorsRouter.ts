import express from 'express'
import { resData } from '../controller/resData';
import { resDonates } from '../controller/resDonatesBy';
const router = express.Router();

router.get('/allDonors', resData)

router.get('/:donates', resDonates)
export default router