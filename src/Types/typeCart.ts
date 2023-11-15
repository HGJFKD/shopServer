import { InferSchemaType, Schema } from "mongoose";


const Cart: Schema<cart> = new Schema<cart>({

    product_id: {
        type: String,
        required: true

    },
    quantity: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

export type cart = InferSchemaType<typeof Schema>;
export default Cart