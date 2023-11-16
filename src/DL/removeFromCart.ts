import UserAndProduct_Ids from "../Types/typeUserAndProduct_Ids";
import UserModel from "../Types/typeUserModel";

export default async function removeFromCart(_ids: UserAndProduct_Ids) {
    const { user_id, product_id } = _ids

    const res = await UserModel.findOneAndUpdate(
        { _id: user_id },
        { $pull: { cart: { product_id: product_id } } },
        { new: true },
    ).exec()

    return res
}