"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverUpdateCartByUser = void 0;
const updateCartByUser_1 = require("../DL/updateCartByUser");
async function serverUpdateCartByUser(user) {
    const res = await (0, updateCartByUser_1.updateCartByUser)(user);
    if (!res) {
        throw new Error('');
    }
    else {
        return res;
    }
}
exports.serverUpdateCartByUser = serverUpdateCartByUser;
