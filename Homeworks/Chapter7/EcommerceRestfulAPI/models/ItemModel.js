const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    // _id: mongoose.ObjectId,
    quantity: {
        type: Number,
        required: true,
    },
    product: {
        type: mongoose.ObjectId,
        ref: "Product",
    },
});

module.exports = mongoose.model("Item", ItemSchema);
