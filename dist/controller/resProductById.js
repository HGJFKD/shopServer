"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serverProductsById_1 = require("../servicers/serverProductsById");
async function resProductsById(req, res) {
    try {
        const data = await (0, serverProductsById_1.serverProductsById)(req.params.product_id);
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json(err);
    }
}
exports.default = resProductsById;
