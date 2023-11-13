"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resCartByUser = void 0;
const serverCartByUser_1 = require("../servicers/serverCartByUser");
async function resCartByUser(req, res) {
    try {
        const data = await (0, serverCartByUser_1.serverCartByUser)(req.params._id);
        const { cart } = data;
        res.status(200).json(cart.products);
    }
    catch (err) {
        res.status(500).json({ err: err.message });
    }
}
exports.resCartByUser = resCartByUser;
