import { getCartByUser } from "../DL/getCartByUser";
import { User } from "../Types/typeUserModel";

export async function serverCartByUser(name: string) {
    const res = await getCartByUser(name)
    if (!res) {
        throw new Error('We did not find such user')
    }
    else {
        return res
    }
}