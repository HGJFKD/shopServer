import { Types } from "mongoose"

type UpdateCart = {
    user_id: Types.ObjectId,
    cart: [
        {
            product_id: string,
            quantity: number
        }
    ]
}

export default UpdateCart