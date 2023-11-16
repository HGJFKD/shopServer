import {  Schema } from "mongoose";


const Cart: Schema<typyCart> = new Schema<typyCart>({

    product_id: {
        type: String,
        required: true

    },
    quantity: {
        type: Number,
        required: true
    }
    
}, {
    timestamps: true,

});

export type typyCart = {
    product_id: string,
    quantity: number
};
export default Cart