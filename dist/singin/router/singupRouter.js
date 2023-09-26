"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const resPageNotFound_1 = require("../../controller/resPageNotFound");
const authenticateToken_1 = require("../../auth/authenticateToken");
const router = express_1.default.Router();
router.get('/test', authenticateToken_1.authenticateToken, (req, res) => {
    res.json("test.");
});
router.post("/singup", (req, res) => {
    const username = req.body.username;
    const user = { name: username };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken: accessToken });
});
router.use("*", resPageNotFound_1.resPageNotFound);
exports.default = router;
