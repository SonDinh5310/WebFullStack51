const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    // _id: mongoose.ObjectId,
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: "",
    },
    image_thumbnail: {
        type: String, // URL only
        default: "",
    },
    images: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        default: "",
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        default: 0,
    },
    dateCreated: {
        type: Date,
        default: new Date(),
    },
    countInStock: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Product", ProductSchema);
