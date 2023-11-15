"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsByCategory = void 0;
const typeProductsModel_1 = __importDefault(require("../Types/typeProductsModel"));
// Get all data func
async function getProductsByCategory(category_id) {
    const res = await typeProductsModel_1.default.findByIdAndUpdate({ _id: category_id }, { $inc: { 'clicks': 1 } }, { new: true }).exec();
    return res;
}
exports.getProductsByCategory = getProductsByCategory;
