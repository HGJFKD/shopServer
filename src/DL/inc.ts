import ProductsModel from "../Types/typeProductsModel";
import UserAndProduct_Ids from "../Types/typeUserAndProduct_Ids";
import UserModel from "../Types/typeUserModel";

export default async function inc(_ids: UserAndProduct_Ids) {

    const { user_id, product_id } = _ids;
    let res;
    await ProductsModel.findOneAndUpdate(
        { 'products.product_id': product_id },
        { $inc: { 'products.$.quantity': -1 } },
        { new: true }
    ).exec()

    res = await UserModel.findOneAndUpdate(
        { _id: user_id, cart: { $elemMatch: { 'product_id': product_id } } },
        { $inc: { 'cart.$.quantity': 1 } },
        { new: true }
    ).exec()
    return res
}