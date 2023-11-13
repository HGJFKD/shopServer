"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJWTToken = void 0;
require("dotenv").config();
const jwt = require("jsonwebtoken");
function createJWTToken(res) {
    const name = res.name;
    const accessToken = jwt.sign(name, process.env.ACCESS_TOKEN_SECRET);
    return { accessToken: accessToken };
}
exports.createJWTToken = createJWTToken;
;
