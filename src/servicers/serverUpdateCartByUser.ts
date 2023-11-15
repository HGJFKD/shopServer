import { isUnitless } from "@mui/material/styles/cssUtils";
import { updateCartByUser } from "../DL/updateCartByUser";
import { User } from "../Types/typeUserModel";
import isUser from "../DL/isUser";

export async function serverUpdateCartByUser(user: User) {
    
    const { isUserBollean } = await isUser(user)

    if ( !isUserBollean ) {
        throw new Error('We did not find such a user')
    }
    
    const res = await updateCartByUser(user)
    if (!res) {
        throw new Error()
    }
    else {
        return res
    }
}