import { bottle } from "../Types/ProductsSchemos/typeBottles";
import { charger } from "../Types/ProductsSchemos/typeChargers";
import { earbud } from "../Types/ProductsSchemos/typeEarbuds";
import { laptop } from "../Types/ProductsSchemos/typeLaptops";
import { phone } from "../Types/ProductsSchemos/typePhones";
import { refrigerator } from "../Types/ProductsSchemos/typeRefrigerator";
import { shirt } from "../Types/ProductsSchemos/typeShirts";
import Changer from "../Types/enumChanger";
import ProductsModel from "../Types/typeProductsModel";
import UserAndProduct_Ids from "../Types/typeUserAndProduct_Ids";
import UserModel from "../Types/typeUserModel";
import addToCart from "./addToCart";
import { getCartByUser } from "./getCartByUser";
import { getProductById } from "./getProductById";
import inc from "./inc";
import removeFromCart from "./removeFromCart";


export async function changeQuantityOnCartByUser(_ids: UserAndProduct_Ids, changer: Changer): Promise<
    bottle | charger | earbud | laptop | phone | refrigerator | shirt | null | string> {

    const { user_id, product_id } = _ids;
    let res;

    if (changer === 0) {

        const thisProductAtCart = await UserModel.findOne(
            {
                _id: user_id,
                cart: { $elemMatch: { 'product_id': product_id } },
            },
            { 'cart.$': 1 }
        )
        if (thisProductAtCart) {
            const thisProduct = await getProductById(product_id)
            if (Number(thisProduct!.products[0].quantity) >= 1) {

                res = await inc(_ids)

            } else {
                throw new Error(`product: ${product_id} is Out of stock `)
            }
        } else {
            res = await addToCart(_ids)
            res = await inc(_ids)
        }
    }


    if (changer === 1) {
        const thisProduct = await UserModel.findOne(
            {
                _id: user_id,
                cart: { $elemMatch: { 'product_id': product_id } },
            },
            { 'cart.$': 1 }
        )
        if (thisProduct) {
            if (thisProduct!.cart[0].quantity <= 1) {              
                res = getCartByUser(user_id)
                console.log(res);
                
                await removeFromCart(_ids)
                console.log("R", res);
            }

            res = await UserModel.findOneAndUpdate(
                { _id: user_id, cart: { $elemMatch: { 'product_id': product_id } } },
                { $inc: { 'cart.$.quantity': -1 } },
                { new: true }
            ).exec()

            await ProductsModel.findOneAndUpdate(
                { 'products.product_id': product_id },
                { $inc: { 'products.$.quantity': 1 } },
                { new: true }
            ).exec()

        } else {
            throw new Error('There is no such product in the cart')
        }

    }

    return res
}