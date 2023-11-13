"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCartByUser = void 0;
const typeUserModel_1 = __importDefault(require("../Types/typeUserModel"));
// Get all data func
async function getCartByUser(User_id) {
    const res = await typeUserModel_1.default.find({ User_id }).exec();
    return res;
}
exports.getCartByUser = getCartByUser;
