"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const phonesSchema = new mongoose_1.Schema({
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
            screen_size: {
                type: Number,
                required: true
            }
        }]
}, { timestamps: true });
exports.default = phonesSchema;
