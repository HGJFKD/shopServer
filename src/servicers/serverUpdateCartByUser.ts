import { updateCartByUser } from "../DL/updateCartByUser";
import { User } from "../Types/typeUserModel";

export async function serverUpdateCartByUser(user: User) {
    
    const res = await updateCartByUser(user)
    if (!res) {
        throw new Error('')
    }
    else {
        return res
    }
}