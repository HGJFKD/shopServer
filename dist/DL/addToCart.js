"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeUserModel_1 = __importDefault(require("../Types/typeUserModel"));
const changeQuantityOnCartByUser_1 = require("./changeQuantityOnCartByUser");
async function addToCart(_ids) {
    const { user_id, product_id } = _ids;
    const addedProduct = await typeUserModel_1.default.findByIdAndUpdate({ _id: user_id }, {
        $push: {
            cart: {
                "product_id": product_id,
                "quantity": -1
            }
        }
    }, { new: true }).exec();
    const changer = 0;
    const res = await (0, changeQuantityOnCartByUser_1.changeQuantityOnCartByUser)(_ids, changer);
    return res;
}
exports.default = addToCart;
