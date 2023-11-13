"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chackIfUser_1 = require("../servicers/chackIfUser");
async function resIsUser(req, res) {
    try {
        if (await (0, chackIfUser_1.chackIfUser)(req.body.user)) {
            res.status(200).json('User in DB');
        }
        else {
            res.status(500).json('User not in DB');
        }
    }
    catch (err) {
        res.status(401).json({ err: err.message });
    }
}
exports.default = resIsUser;
