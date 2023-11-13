"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resProductsByCategory_1 = require("../controller/resProductsByCategory");
const resTopCategories_1 = require("../controller/resTopCategories");
const resCartByUser_1 = require("../controller/resCartByUser");
const resProductById_1 = __importDefault(require("../controller/resProductById"));
const router = express_1.default.Router();
router.get('/category/:category_name', resProductsByCategory_1.resProductsByCategory);
router.get('/top_categories', resTopCategories_1.resTopCategories);
router.get('/:product_id', resProductById_1.default);
router.get('/cart/:user_name', resCartByUser_1.resCartByUser);
exports.default = router;
