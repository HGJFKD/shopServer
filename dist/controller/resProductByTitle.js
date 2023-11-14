"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serverProductByTitle_1 = require("../servicers/serverProductByTitle");
async function resProductByTitle(req, res) {
    try {
        const data = await (0, serverProductByTitle_1.serverProductByTitle)(req.params.product_title);
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({ err: err.message });
    }
}
exports.default = resProductByTitle;
