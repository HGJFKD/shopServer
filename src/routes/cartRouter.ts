import express from 'express'
import { resCartByUser } from '../controller/resCartByUser';
import { resIfUpdateCartByUser } from '../controller/resIfUpdateCartByUser';
import resIncQuantityOnCartByUser from '../controller/resIncQuantityOnCartByUser';
import resDecQuantityOnCartByUser from '../controller/resdecQuantityOnCartByUser';


const router = express.Router();

router.get('/:_id', resCartByUser)

router.put('/inc', resIncQuantityOnCartByUser)

router.put('/dec', resDecQuantityOnCartByUser)

router.put('/update', resIfUpdateCartByUser)




export default router