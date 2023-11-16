"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverRemoveFromCart = void 0;
const isProductAtCart_1 = __importDefault(require("../DL/isProductAtCart"));
const removeFromCart_1 = __importDefault(require("../DL/removeFromCart"));
async function serverRemoveFromCart(body) {
    const { user_id, product_id } = body;
    const _ids = {
        user_id: user_id,
        product_id: product_id
    };
    let res;
    if (body.user_id === null || body.product_id === null) {
        throw new Error('A must to grieve user_id end product_id');
    }
    else {
        res = await (0, isProductAtCart_1.default)(user_id);
        if (res) {
            return res = await (0, removeFromCart_1.default)(_ids);
        }
        else {
            throw new Error(" We did not find a product with such an id in the cart ");
        }
    }
}
exports.serverRemoveFromCart = serverRemoveFromCart;
