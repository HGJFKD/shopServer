"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chackIfUser = void 0;
const getUser_1 = require("../DL/getUser");
const createJWTToken_1 = require("../auth/createJWTToken");
async function chackIfUser(user) {
    const res = await (0, getUser_1.getUser)(user);
    if (res == 0) {
        throw new Error('User is not defind');
        return false;
    }
    const token = (0, createJWTToken_1.createJWTToken)(user);
    return token;
}
exports.chackIfUser = chackIfUser;
