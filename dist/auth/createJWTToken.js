"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJWTToken = void 0;
require("dotenv").config();
const jwt = require("jsonwebtoken");
function createJWTToken(user_id) {
    const accessToken = jwt.sign(user_id.toJSON(), process.env.ACCESS_TOKEN_SECRET);
    return { accessToken: accessToken };
}
exports.createJWTToken = createJWTToken;
;
