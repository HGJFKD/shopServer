"use strict";
// require('dotenv').config()
// const jwt = require("jsonwebtoken");
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addUser_1 = require("../controller/addUser");
const resSignIn_1 = __importDefault(require("../controller/resSignIn"));
const router = express_1.default.Router();
router.post('/signup', addUser_1.addUser);
router.post("/signin", resSignIn_1.default);
exports.default = router;
