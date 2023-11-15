"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJWTToken = void 0;
require("dotenv").config();
const jwt = require("jsonwebtoken");
function createJWTToken(res) {
    const { name, email } = res;
    const accessToken = jwt.sign({ name, email }, process.env.ACCESS_TOKEN_SECRET);
    return { accessToken: accessToken };
}
exports.createJWTToken = createJWTToken;
;
