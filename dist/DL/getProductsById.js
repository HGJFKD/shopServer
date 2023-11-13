"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsById = void 0;
const typeProductsModel_1 = __importDefault(require("../Types/typeProductsModel"));
// Get all data func
async function getProductsById(product_id) {
    const res = await typeProductsModel_1.default.findById({ mixedObjects: { _id: product_id } }).exec();
    return res;
}
exports.getProductsById = getProductsById;
