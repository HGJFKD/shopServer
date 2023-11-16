"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serverSignIn_1 = require("../servicers/serverSignIn");
async function resSignIn(req, res) {
    try {
        const { token, user_id } = await (0, serverSignIn_1.serverSignIn)(req.body);
        res.status(200).json({ accessToken: token.accessToken, user_id: user_id });
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An error occurred";
        res.status(401).json({ err: errorMessage });
    }
}
exports.default = resSignIn;
