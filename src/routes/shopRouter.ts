import express from 'express'
import { resProductsByCategory } from '../controller/resProductsByCategory';
import { resTopCategories } from '../controller/resTopCategories';
import { resCartByUser } from '../controller/resCartByUser';
import resProductByTitle from '../controller/resProductByTitle';

const router = express.Router();

router.get('/category/:category_id', resProductsByCategory)

router.get('/top_categories', resTopCategories)

router.get('/:product_title', resProductByTitle)


export default router