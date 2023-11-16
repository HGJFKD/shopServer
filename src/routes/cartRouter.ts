import express from 'express'
import { resCartByUser } from '../controller/resCartByUser';
import { resUpdateCart } from '../controller/resUpdateCart';
import resIncQuantityOnCartByUser from '../controller/resIncQuantityOnCartByUser';
import resDecQuantityOnCartByUser from '../controller/resDecQuantityOnCartByUser';
import { resRemoveFromCart } from '../controller/resRemoveFromCart';
import { resClearCart } from '../controller/resClearCart';


const router = express.Router();

router.get('/:user_id', resCartByUser)

router.put('/inc', resIncQuantityOnCartByUser)

router.put('/dec', resDecQuantityOnCartByUser)

router.put('/update', resUpdateCart)

router.put('/remove', resRemoveFromCart)

router.put('/clear', resClearCart)




export default router