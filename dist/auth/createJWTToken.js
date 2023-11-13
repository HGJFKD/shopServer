"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJWTToken = void 0;
require("dotenv").config();
const jwt = require("jsonwebtoken");
function createJWTToken(res) {
    const _id = res._id;
    const accessToken = jwt.sign(_id, process.env.ACCESS_TOKEN_SECRET);
    return { accessToken: accessToken };
}
exports.createJWTToken = createJWTToken;
;
