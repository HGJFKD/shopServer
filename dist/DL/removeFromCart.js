"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeUserModel_1 = __importDefault(require("../Types/typeUserModel"));
async function removeFromCart(_ids) {
    const { user_id, product_id } = _ids;
    const res = await typeUserModel_1.default.findOneAndUpdate({ _id: user_id }, { $pull: { cart: { product_id: product_id } } }, { new: true }).exec();
    return res;
}
exports.default = removeFromCart;
