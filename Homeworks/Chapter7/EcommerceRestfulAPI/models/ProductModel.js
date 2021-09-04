const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image_thumbnail: {
        type: String, // URL only
    },
    images: [
        {
            type: String,
        },
    ],
    brand: {
        type: String,
    },
    price: {
        type: Number,
    },
    category: {
        type: String,
    },
    rating: {
        type: Number,
        default: 0,
    },
    dateCreated: {
        type: Date,
    },
    countInStock: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Product", ProductSchema);
