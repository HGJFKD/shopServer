"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCartByUser = void 0;
const changeQuantityOnCartByUser_1 = require("./changeQuantityOnCartByUser");
const getCartByUser_1 = require("./getCartByUser");
async function updateCartByUser(body) {
    const { user_id, cart } = body;
    const changer = 0;
    cart.map(async ({ quantity, product_id }) => {
        for (let index = 0; index < quantity; index++) {
            try {
                const added = await (0, changeQuantityOnCartByUser_1.changeQuantityOnCartByUser)({ user_id, product_id }, changer);
                console.log(added);
            }
            catch (error) {
                continue;
            }
        }
    });
    const newCatt = await (0, getCartByUser_1.getCartByUser)(user_id);
    return newCatt;
}
exports.updateCartByUser = updateCartByUser;
