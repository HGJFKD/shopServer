"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverProductsById = void 0;
const getProductsById_1 = require("../DL/getProductsById");
async function serverProductsById(product_id) {
    const res = await (0, getProductsById_1.getProductsById)(product_id);
    if (!res) {
        throw new Error('We did not find a product with such an id');
    }
    else {
        return res;
    }
}
exports.serverProductsById = serverProductsById;
