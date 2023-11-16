"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeProductsModel_1 = __importDefault(require("../Types/typeProductsModel"));
const typeUserModel_1 = __importDefault(require("../Types/typeUserModel"));
async function inc(_ids) {
    const { user_id, product_id } = _ids;
    let res;
    await typeProductsModel_1.default.findOneAndUpdate({ 'products.product_id': product_id }, { $inc: { 'products.$.quantity': -1 } }, { new: true }).exec();
    res = await typeUserModel_1.default.findOneAndUpdate({ _id: user_id, cart: { $elemMatch: { 'product_id': product_id } } }, { $inc: { 'cart.$.quantity': 1 } }, { new: true }).exec();
    return res;
}
exports.default = inc;
