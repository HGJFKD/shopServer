import UserModel, { User } from "../Types/typeUserModel";

// Get all data func
export async function getCartByUser(name: string): Promise<User[] | User | undefined> {
    const res = await UserModel.findById({ name }).exec()
    return res;
}