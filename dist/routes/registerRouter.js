"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const jwt = require("jsonwebtoken");
const express_1 = __importDefault(require("express"));
const setUserController_1 = require("../controller/setUserController");
const router = express_1.default.Router();
router.post("/new", setUserController_1.setUserController);
exports.default = router;
