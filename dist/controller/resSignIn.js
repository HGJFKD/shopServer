"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serverSignIn_1 = require("../servicers/serverSignIn");
async function resSignIn(req, res) {
    try {
        await (0, serverSignIn_1.serverSignIn)(req.body);
        res.status(200).json('User connected successfully');
    }
    catch (err) {
        res.status(401).json({ err: err.message });
    }
}
exports.default = resSignIn;
