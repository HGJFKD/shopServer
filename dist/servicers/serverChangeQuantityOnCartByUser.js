"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverChangeQuantityOnCartByUser = void 0;
const changeQuantityOnCartByUser_1 = require("../DL/changeQuantityOnCartByUser");
async function serverChangeQuantityOnCartByUser(body, changer) {
    const { user_id, product_id } = body;
    const _ids = {
        user_id: user_id,
        product_id: product_id
    };
    if (body.user_id === null || body.product_id === null) {
        throw new Error('A must to grieve user_id end product_id');
    }
    else {
        const res = await (0, changeQuantityOnCartByUser_1.changeQuantityOnCartByUser)(_ids, changer);
        if (!res) {
            throw new Error('We did not find a product with such an id');
        }
        else {
            return res;
        }
    }
}
exports.serverChangeQuantityOnCartByUser = serverChangeQuantityOnCartByUser;
