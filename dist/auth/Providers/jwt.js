"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateAccessToken = void 0;
const dotenv = require('dotenv');
const jwt = require("jsonwebtoken");
const config = require("config");
const kay = config.get("JWT_KAY");
const generateAccessToken = (user) => {
    const { _id, isBusiness, isAdmin } = user;
    const token = jwt.sign({ _id, isBusiness, isAdmin }, kay);
    return token;
};
exports.generateAccessToken = generateAccessToken;
const verifyToken = (tokenFromClient) => {
};
exports.verifyToken = verifyToken;
