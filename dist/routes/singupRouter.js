"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const jwt = require("jsonwebtoken");
const express_1 = __importDefault(require("express"));
const resPageNotFound_1 = require("../controller/resPageNotFound");
const authenticateToken_1 = require("../auth/authenticateToken");
const setUserController_1 = require("../controller/setUserController");
const router = express_1.default.Router();
router.get('/test', authenticateToken_1.authenticateToken, (req, res) => {
    res.json("test.");
});
router.post("/singup", setUserController_1.setUserController);
router.use("*", resPageNotFound_1.resPageNotFound);
exports.default = router;
