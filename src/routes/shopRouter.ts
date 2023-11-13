import express from 'express'
import { resProductsByCategory } from '../controller/resProductsByCategory';
import { resTopCategories } from '../controller/resTopCategories';
import { resCartByUser } from '../controller/resCartByUser';
import resProductById from '../controller/resProductById';

const router = express.Router();

router.get('/category/:category_name', resProductsByCategory)

router.get('/top_categories', resTopCategories)

router.get('/:product_id', resProductById)


export default router