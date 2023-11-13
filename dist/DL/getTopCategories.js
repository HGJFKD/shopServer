"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeProductsModel_1 = __importDefault(require("../Types/typeProductsModel"));
// Get all data func
async function getTopCategories() {
    const res = await typeProductsModel_1.default.find({ clicks: { $exists: true } })
        .sort({ clicks: -1 })
        .limit(5);
    return res;
}
exports.default = getTopCategories;
