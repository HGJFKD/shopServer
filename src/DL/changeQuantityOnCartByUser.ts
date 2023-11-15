import { bottle } from "../Types/ProductsSchemos/typeBottles";
import { charger } from "../Types/ProductsSchemos/typeChargers";
import { earbud } from "../Types/ProductsSchemos/typeEarbuds";
import { laptop } from "../Types/ProductsSchemos/typeLaptops";
import { phone } from "../Types/ProductsSchemos/typePhones";
import { refrigerator } from "../Types/ProductsSchemos/typeRefrigerator";
import { shirt } from "../Types/ProductsSchemos/typeShirts";
import Changer from "../Types/enumChanger";
import UserAndProduct_Ids from "../Types/typeUserAndProduct_Ids";
import UserModel from "../Types/typeUserModel";


export async function changeQuantityOnCartByUser(_ids: UserAndProduct_Ids, changer: Changer): Promise<
    bottle | charger | earbud | laptop | phone | refrigerator | shirt | undefined> {

    const { user_id, product_id } = _ids;
    let res;

    if (changer === 0) {
        res = await UserModel.findOneAndUpdate(
            { _id: user_id, cart: { $elemMatch: { 'product_id': product_id } } },
            { $inc: { 'cart.$.quantity': 1 } },
            { new: true }
        ).exec()
    }
    if (changer === 1) {
        res = await UserModel.findOneAndUpdate(
            { _id: user_id, cart: { $elemMatch: { 'product_id': product_id } } },
            { $inc: { 'cart.$.quantity': -1 } },
            { new: true }
        ).exec()
    }

    return res
}