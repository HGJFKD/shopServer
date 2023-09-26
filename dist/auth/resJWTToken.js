"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resJWTToken = void 0;
const jwt = require("jsonwebtoken");
function resJWTToken(res) {
    const user = res.user;
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    return accessToken;
}
exports.resJWTToken = resJWTToken;
;
