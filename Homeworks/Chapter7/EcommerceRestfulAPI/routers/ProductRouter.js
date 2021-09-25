const express = require("express");
const ProductRouter = express.Router();
const ProductController = require("../controllers/ProductController.js");
const MiddlewareVerify = require("../middlewares/Verify.js");

ProductRouter.get("/", ProductController.getAllProducts);
ProductRouter.get("/:id", ProductController.getProductById);
ProductRouter.post("/register", MiddlewareVerify, ProductController.addProduct);
ProductRouter.put(
    "/:id",
    MiddlewareVerify,
    ProductController.updateProductById
);
ProductRouter.delete(
    "/:id",
    MiddlewareVerify,
    ProductController.deleteProductById
);

module.exports = ProductRouter;
