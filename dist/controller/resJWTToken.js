"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resJWTToken = void 0;
const createJWTToken_1 = require("../auth/createJWTToken");
const jwt = require("jsonwebtoken");
function resJWTToken(res) {
    const user = res.user;
    const accessToken = (0, createJWTToken_1.createJWTToken)(user);
    return { accessToken: accessToken };
}
exports.resJWTToken = resJWTToken;
;
