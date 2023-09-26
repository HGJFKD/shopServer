"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resData_1 = require("../controller/resData");
const router = express_1.default.Router();
router.get('/donors', resData_1.resData);
router.get('/donors/:donorID', (req, res) => {
    res.status(200).json("a");
});
exports.default = router;
