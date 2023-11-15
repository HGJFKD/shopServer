import UserModel, { User } from "../Types/typeUserModel";

export async function updateCartByUser(user: User) {
    const _id = user._id
    const products = user.cart['products']

    const res = await UserModel.findOne(
        { _id: _id }
    );
    console.log(res);


    return res
}