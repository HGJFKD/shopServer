import UserModel, { User } from "../Types/typeUserModel";

// Get all data func
export async function getCartByUser(_id: string): Promise<User[] | User | undefined> {
    const res = await UserModel.findById({ _id }).exec()
    return res;
}