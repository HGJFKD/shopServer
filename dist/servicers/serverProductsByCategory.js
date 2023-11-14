"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverProductsByCategory = void 0;
const getProductsByCategory_1 = require("../DL/getProductsByCategory");
async function serverProductsByCategory(category_id) {
    const res = await (0, getProductsByCategory_1.getProductsByCategory)(category_id);
    if (!res) {
        throw new Error('We did not find such category');
    }
    else {
        return res;
    }
}
exports.serverProductsByCategory = serverProductsByCategory;
