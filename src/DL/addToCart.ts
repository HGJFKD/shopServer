import Changer from "../Types/enumChanger";
import ProductsModel from "../Types/typeProductsModel";
import UserAndProduct_Ids from "../Types/typeUserAndProduct_Ids";
import UserModel from "../Types/typeUserModel";
import { changeQuantityOnCartByUser } from "./changeQuantityOnCartByUser";

export default async function addToCart(_ids: UserAndProduct_Ids) {

    const { user_id, product_id } = _ids
  
    const addedProduct = await UserModel.findByIdAndUpdate(
        { _id: user_id },
        {
            $push: {
                cart: {
                    "product_id": product_id,
                    "quantity": -1
                }
            }
        },
        { new: true },
    ).exec()
   

    const changer: Changer = 0
    const res = await changeQuantityOnCartByUser(_ids, changer)
    return res
}