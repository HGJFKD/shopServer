"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTopCategories = void 0;
const typeClicksCategoriesModel_1 = __importDefault(require("../Types/typeClicksCategoriesModel"));
// Get all data func
async function getTopCategories() {
    const topObjects = await typeClicksCategoriesModel_1.default.find({ clicks: { $exists: true } })
        .sort({ clicks: -1 })
        .limit(5);
    return topObjects;
}
exports.getTopCategories = getTopCategories;
