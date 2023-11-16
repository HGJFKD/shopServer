"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverClearCart = void 0;
const isProductAtCart_1 = __importDefault(require("../DL/isProductAtCart"));
const clearCart_1 = __importDefault(require("../DL/clearCart"));
async function serverClearCart(body) {
    const { user_id } = body;
    let res;
    if (body.user_id === null || body.product_id === null) {
        throw new Error('A must to grieve user_id end product_id');
    }
    else {
        res = await (0, isProductAtCart_1.default)(user_id);
        if (res) {
            return res = await (0, clearCart_1.default)(user_id);
        }
        else {
            throw new Error(" We did not find a product with such an id in the cart ");
        }
    }
}
exports.serverClearCart = serverClearCart;
