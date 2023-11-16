import { isUnitless } from "@mui/material/styles/cssUtils";
import { updateCartByUser } from "../DL/updateCartByUser";
import { User } from "../Types/typeUserModel";
import isUser from "../DL/isUser";
import UpdateCart from "../Types/typeUpdateCart";

export async function serverUpdateCartByUser(body: UpdateCart) {
    const { user_id } = body

    const { isUserBollean } = await isUser(user_id, '_id')

    if ( !isUserBollean ) {
        throw new Error('We did not find such a user')
    }
    
    const res = await updateCartByUser(body)
    if (!res) {
        throw new Error()
    }
    else {
        return res
    }
}