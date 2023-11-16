"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCartByUser = void 0;
const typeUserModel_1 = __importDefault(require("../Types/typeUserModel"));
async function updateCartByUser(body) {
    const { user_id, cart } = body;
    const res = await typeUserModel_1.default.findByIdAndUpdate({ _id: user_id }, { $set: { cart: cart } }, { new: true });
    return res;
}
exports.updateCartByUser = updateCartByUser;
