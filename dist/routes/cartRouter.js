"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resCartByUser_1 = require("../controller/resCartByUser");
const resUpdateCart_1 = require("../controller/resUpdateCart");
const resIncQuantityOnCartByUser_1 = __importDefault(require("../controller/resIncQuantityOnCartByUser"));
const resdecQuantityOnCartByUser_1 = __importDefault(require("../controller/resdecQuantityOnCartByUser"));
const router = express_1.default.Router();
router.get('/:_id', resCartByUser_1.resCartByUser);
router.put('/inc', resIncQuantityOnCartByUser_1.default);
router.put('/dec', resdecQuantityOnCartByUser_1.default);
router.put('/update', resUpdateCart_1.resUpdateCart);
exports.default = router;
