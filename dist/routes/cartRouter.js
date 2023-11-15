"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resCartByUser_1 = require("../controller/resCartByUser");
const resUpdateCart_1 = require("../controller/resUpdateCart");
const resIncQuantityOnCartByUser_1 = __importDefault(require("../controller/resIncQuantityOnCartByUser"));
const resDecQuantityOnCartByUser_1 = __importDefault(require("../controller/resDecQuantityOnCartByUser"));
const router = express_1.default.Router();
router.get('/:user_id', resCartByUser_1.resCartByUser);
router.put('/inc', resIncQuantityOnCartByUser_1.default);
router.put('/dec', resDecQuantityOnCartByUser_1.default);
router.put('/update', resUpdateCart_1.resUpdateCart);
exports.default = router;
