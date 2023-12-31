"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverProductById = void 0;
async function serverProductById(product_title) {
    const res = await getProductById(product_title);
    if (!res) {
        throw new Error('We did not find a product with such an title');
    }
    else {
        return res;
    }
}
exports.serverProductById = serverProductById;
