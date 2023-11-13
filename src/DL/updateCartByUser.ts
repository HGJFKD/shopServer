import UserModel, { User } from "../Types/typeUserModel";

export async function updateCartByUser(user: User) {
    const _id = user._id
    const products = user.cart['products']

    console.log(products)

    const res = await UserModel.findOneAndUpdate(
        { _id: _id },
        { cart: { ['products']: products } },
        { new: true }
    );

    return res
}