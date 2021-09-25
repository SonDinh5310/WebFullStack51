const express = require("express");
const OrderRouter = express.Router();
const OrderController = require("../controllers/OrderController.js");
const MiddlewareVerify = require("../middlewares/Verify.js");

OrderRouter.get("/", MiddlewareVerify, OrderController.getAllOrders);
OrderRouter.get("/:id", MiddlewareVerify, OrderController.getOrderById);
OrderRouter.post("register", MiddlewareVerify, OrderController.newOrder);
OrderRouter.put("/:id", MiddlewareVerify, OrderController.updateOrderById);
OrderRouter.delete("/:id", MiddlewareVerify, OrderController.deleteOrderById);

module.exports = OrderRouter;
