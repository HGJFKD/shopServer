import UpdateCart from "../Types/typeUpdateCart";
import UserModel from "../Types/typeUserModel";

export async function updateCartByUser(body: UpdateCart) {
    const { user_id, cart } = body

    const res = await UserModel.findByIdAndUpdate(
        { _id: user_id },
        { $set: { cart: cart } },
        { new: true }
    );

    return res
}