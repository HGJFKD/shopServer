"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverProductById = void 0;
const getProductById_1 = require("../DL/getProductById");
async function serverProductById(product_id) {
    const res = await (0, getProductById_1.getProductById)(product_id);
    if (!res) {
        throw new Error('We did not find a product with such an id');
    }
    else {
        return res;
    }
}
exports.serverProductById = serverProductById;
