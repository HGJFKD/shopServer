"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resData_1 = require("../controller/resData");
const resDonatesBy_1 = require("../controller/resDonatesBy");
const router = express_1.default.Router();
router.get('/allDonors', resData_1.resData);
router.get('/:donates', resDonatesBy_1.resDonates);
exports.default = router;
