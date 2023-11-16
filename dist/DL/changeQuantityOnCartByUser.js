"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeQuantityOnCartByUser = void 0;
const typeProductsModel_1 = __importDefault(require("../Types/typeProductsModel"));
const typeUserModel_1 = __importDefault(require("../Types/typeUserModel"));
const addToCart_1 = __importDefault(require("./addToCart"));
const getProductById_1 = require("./getProductById");
const inc_1 = __importDefault(require("./inc"));
const removeFromCart_1 = __importDefault(require("./removeFromCart"));
async function changeQuantityOnCartByUser(_ids, changer) {
    const { user_id, product_id } = _ids;
    let res;
    if (changer === 0) {
        const thisProductAtCart = await typeUserModel_1.default.findOne({
            _id: user_id,
            cart: { $elemMatch: { 'product_id': product_id } },
        }, { 'cart.$': 1 });
        if (thisProductAtCart) {
            const thisProduct = await (0, getProductById_1.getProductById)(product_id);
            if (Number(thisProduct.products[0].quantity) >= 1) {
                res = await (0, inc_1.default)(_ids);
            }
            else {
                throw new Error(`product: ${product_id} is Out of stock `);
            }
        }
        else {
            res = await (0, addToCart_1.default)(_ids);
            res = await (0, inc_1.default)(_ids);
        }
    }
    if (changer === 1) {
        const thisProduct = await typeUserModel_1.default.findOne({
            _id: user_id,
            cart: { $elemMatch: { 'product_id': product_id } },
        }, { 'cart.$': 1 });
        if (thisProduct) {
            if (thisProduct.cart[0].quantity <= 1) {
                return res = await (0, removeFromCart_1.default)(_ids);
            }
            res = await typeUserModel_1.default.findOneAndUpdate({ _id: user_id, cart: { $elemMatch: { 'product_id': product_id } } }, { $inc: { 'cart.$.quantity': -1 } }, { new: true }).exec();
            await typeProductsModel_1.default.findOneAndUpdate({ 'products.product_id': product_id }, { $inc: { 'products.$.quantity': 1 } }, { new: true }).exec();
        }
        else {
            throw new Error('There is no such product in the cart');
        }
    }
    return res;
}
exports.changeQuantityOnCartByUser = changeQuantityOnCartByUser;
