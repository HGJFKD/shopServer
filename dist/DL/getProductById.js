"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = void 0;
const typeProductsModel_1 = __importDefault(require("../Types/typeProductsModel"));
// Get all data func
async function getProductById(product_id) {
    const res = await typeProductsModel_1.default.findOneAndUpdate({ 'products.product_id': product_id }, { $inc: { 'products.$.clicks': 1 } }, { new: true }).exec();
    const product = await typeProductsModel_1.default.findOne({ 'products.product_id': product_id }, { 'products.$': 1 }, { new: true }).exec();
    return product;
}
exports.getProductById = getProductById;
