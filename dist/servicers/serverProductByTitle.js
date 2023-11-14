"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverProductByTitle = void 0;
const getProductByTitle_1 = require("../DL/getProductByTitle");
async function serverProductByTitle(product_title) {
    const res = await (0, getProductByTitle_1.getProductByTitle)(product_title);
    if (!res) {
        throw new Error('We did not find a product with such an id');
    }
    else {
        return res;
    }
}
exports.serverProductByTitle = serverProductByTitle;
