import UserModel, { User } from "../Types/typeUserModel";


export async function getCartByUser(_id: string): Promise<User | null> {
    const res = await UserModel.findById({ _id }).exec()
    if (res) {
        return res;
    } else {
        return null;
    }
}
