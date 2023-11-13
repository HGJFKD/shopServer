"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsByCategory = void 0;
const typeProductsModel_1 = __importDefault(require("../Types/typeProductsModel"));
// Get all data func
async function getProductsByCategory(category_name) {
    console.log(category_name);
    const res = await typeProductsModel_1.default.find({ name: category_name }).exec();
    return res;
}
exports.getProductsByCategory = getProductsByCategory;
