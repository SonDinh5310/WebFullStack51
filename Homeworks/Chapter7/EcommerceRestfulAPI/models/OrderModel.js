const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const 

const OrderSchema = new Schema({
  user: {
    ref: "User",
  },
  orderItems: {
    ref: "Item",
    required: true,
  },
  shippingAddress1: {
    type: String,
    required: true,
  },
  shippingAddress2: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  phone: {
    type: String,
  },
  status: {
    status: 0, //1: Đang trong kho, 2: Đang ship, 3: Thành công, 4: Đã hủy
  },
  totalPrice: {
    type: Number,
  },
  dateCreated: {
    type: Date,
  }
})

module.exports = mongoose.model("OrderModel", OrderSchema);