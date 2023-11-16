import { InferSchemaType, Schema } from "mongoose";


const refrigeratorsSchema: Schema<refrigerator> = new Schema<refrigerator>({
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
        doors: {
            type: Number,
            required: true
        }
    }]

},
    { timestamps: true });

export type refrigerator = {
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
        doors: {
            type: Number,
            required: true
        }
    }]

};
export default refrigeratorsSchema