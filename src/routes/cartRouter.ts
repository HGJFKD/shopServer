import express from 'express'
import { resCartByUser } from '../controller/resCartByUser';
import { resIfUpdateCartByUser } from '../controller/resIfUpdateCartByUser';


const router = express.Router();

router.get('/:_id', resCartByUser)

// router.put('/cart/up/:user', upQuantityByCartUser)

// router.put('/cart/down/:user', downQuantityByCartUser)

router.put('/update', resIfUpdateCartByUser)




export default router