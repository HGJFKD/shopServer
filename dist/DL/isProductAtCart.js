"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getCartByUser_1 = require("./getCartByUser");
async function isProductAtCart(user_id) {
    let product;
    const userCart = await (0, getCartByUser_1.getCartByUser)(user_id);
    return product = userCart ? true : false;
}
exports.default = isProductAtCart;
