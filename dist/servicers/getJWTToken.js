"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getUser_1 = require("../DL/getUser");
const createJWTToken_1 = require("../auth/createJWTToken");
async function getJWTToken(user) {
    const res = await (0, getUser_1.getUser)(user);
    if (res === 0)
        throw new Error("User is not in DB");
    const token = (0, createJWTToken_1.createJWTToken)(user);
    return token;
}
exports.default = getJWTToken;
