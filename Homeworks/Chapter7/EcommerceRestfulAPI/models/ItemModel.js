const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    quantity: {
        type: Number,
        required: true,
    },
    product: {
        ref: "Product",
    },
});

module.exports = mongoose.model("Item", ItemSchema);
