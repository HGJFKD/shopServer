"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductByTitle = void 0;
const typeProductsModel_1 = __importDefault(require("../Types/typeProductsModel"));
// Get all data func
async function getProductByTitle(product_title) {
    const res = await typeProductsModel_1.default.findOne({ 'products.title': product_title }, { 'products.$': 1 }).exec();
    return res.products;
}
exports.getProductByTitle = getProductByTitle;
