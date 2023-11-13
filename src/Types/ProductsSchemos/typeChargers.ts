import { InferSchemaType, Schema } from "mongoose";


const chargersSchema: Schema<charger> = new Schema<charger>({
    name: {
        type: String,
        required: true
    },
    filter: {
        type: String,
        required: true
    },
    clicks: {
        type: Number,
        required: true
    },
    products: [{
        product_id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        images: {
            type: String,
            required: true
        },

        available_in: [{
            hight: {
                type: Number,
                required: true
            },
            width: {
                type: Number,
                required: true
            }
        }],

        clicks: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        watts: {
            type: Number,
            required: true
        }
    }]

},
    { timestamps: true });

export type charger = InferSchemaType<typeof Schema>;
export default chargersSchema