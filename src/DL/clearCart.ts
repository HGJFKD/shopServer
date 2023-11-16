import { Types } from "mongoose";
import UserModel from "../Types/typeUserModel";

export default async function clearCart(user_id: Types.ObjectId) {

    const res = await UserModel.findOneAndUpdate(
        { _id: user_id },
        { $unset: { cart: 1 } },
        { new: true },
    ).exec()

    return res
}