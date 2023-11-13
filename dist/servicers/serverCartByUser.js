"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverCartByUser = void 0;
const getCartByUser_1 = require("../DL/getCartByUser");
async function serverCartByUser(_id) {
    const res = await (0, getCartByUser_1.getCartByUser)(_id);
    if (!res) {
        throw new Error('We did not find such user');
    }
    else {
        return res;
    }
}
exports.serverCartByUser = serverCartByUser;
