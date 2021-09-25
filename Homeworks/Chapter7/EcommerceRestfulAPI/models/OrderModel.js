const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    // _id: mongoose.ObjectId,
    user: {
        type: mongoose.ObjectId,
        ref: "User",
        required: true,
    },
    orderItems: {
        type: mongoose.ObjectId,
        ref: "Item",
        required: true,
    },
    shippingAddress1: {
        type: String,
        required: true,
    },
    shippingAddress2: {
        type: String,
        default: "",
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    status: {
        type: Number,
        default: 0, //0: Chua lay hang, 1: Đang trong kho, 2: Đang ship, 3: Thành công, 4: Đã hủy
    },
    totalPrice: {
        type: Number,
        default: 0,
    },
    dateCreated: {
        type: Date,
        default: new Date(),
    },
});

module.exports = mongoose.model("Order", OrderSchema);
