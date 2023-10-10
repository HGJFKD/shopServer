"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJWTToken = void 0;
require("dotenv").config();
const jwt = require("jsonwebtoken");
function createJWTToken(res) {
    const user = res.userName;
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    return { accessToken: accessToken };
}
exports.createJWTToken = createJWTToken;
;
