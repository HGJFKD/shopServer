"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeProductsModel_1 = __importDefault(require("../Types/typeProductsModel"));
async function isProduct(product_id) {
    const userCart = await getCartByUser(user_id);
    const product = await typeProductsModel_1.default.findOne({ 'products.product_id': product_id }, { 'products.$': 1 }, { new: true }).exec();
    return product ? true : false;
}
exports.default = isProduct;
