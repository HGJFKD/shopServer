"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverTopCategories = void 0;
const getTopCategories_1 = require("../DL/getTopCategories");
async function serverTopCategories() {
    const res = await (0, getTopCategories_1.getTopCategories)();
    if (!res) {
        throw new Error('We did not find such category');
    }
    else {
        return res;
    }
}
exports.serverTopCategories = serverTopCategories;
