import addToCart from "../DL/addToCart"
import { changeQuantityOnCartByUser } from "../DL/changeQuantityOnCartByUser"
import isProductAtCart from "../DL/isProductAtCart"
import Changer from "../Types/enumChanger"
import UserAndProduct_Ids from "../Types/typeUserAndProduct_Ids"

export async function serverChangeQuantityOnCartByUser(body: UserAndProduct_Ids, changer: Changer) {

    const { user_id, product_id } = body

    const _ids: UserAndProduct_Ids = {
        user_id: user_id,
        product_id: product_id
    }
    let res;


    if (body.user_id === null || body.product_id === null) {
        throw new Error('A must to grieve user_id end product_id')
    }
    else {
        res = await changeQuantityOnCartByUser(_ids, changer)

        if (res) {
            return res
        } else {
            throw new Error()
        }
    }
}

