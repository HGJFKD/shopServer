"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serverProductById_1 = require("../servicers/serverProductById");
async function resProductById(req, res) {
    try {
        const data = await (0, serverProductById_1.serverProductById)(req.params.product_id);
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({ err: err.message });
    }
}
exports.default = resProductById;
