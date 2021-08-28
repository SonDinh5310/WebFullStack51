const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productController.js");

productRouter.get("/", productController.get);
productRouter.post("/", productController.post);

module.exports = productRouter;
