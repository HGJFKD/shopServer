"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCartByUser = void 0;
const typeUserModel_1 = __importDefault(require("../Types/typeUserModel"));
async function updateCartByUser(user) {
    const _id = user._id;
    const products = user.cart['products'];
    console.log(products);
    const res = await typeUserModel_1.default.findOneAndUpdate({ _id: _id }, { cart: { ['products']: products } }, { new: true });
    return res;
}
exports.updateCartByUser = updateCartByUser;
