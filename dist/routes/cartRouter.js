"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resCartByUser_1 = require("../controller/resCartByUser");
const resIfUpdateCartByUser_1 = require("../controller/resIfUpdateCartByUser");
const router = express_1.default.Router();
router.get('/:_id', resCartByUser_1.resCartByUser);
// router.put('/cart/up/:user', upQuantityByCartUser)
// router.put('/cart/down/:user', downQuantityByCartUser)
router.put('/update', resIfUpdateCartByUser_1.resIfUpdateCartByUser);
exports.default = router;
