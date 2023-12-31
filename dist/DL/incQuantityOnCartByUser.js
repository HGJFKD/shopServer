"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeQuantityOnCartByUser = void 0;
const typeUserModel_1 = __importDefault(require("../Types/typeUserModel"));
async function changeQuantityOnCartByUser(_ids) {
    const { user_id, product_id } = _ids;
    // const index = UserModel.
    const res = await typeUserModel_1.default.findOneAndUpdate({ _id: user_id, cart: { $elemMatch: { 'product_id': product_id } } }, { $inc: { 'cart.$.quantity': 1 } }, { new: true }).exec();
    return res;
}
exports.changeQuantityOnCartByUser = changeQuantityOnCartByUser;
