const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productController.js");
const { validateProduct } = require("../middlewares/validate.js");
const validateMiddleware = require("../middlewares/validator.js");

productRouter.get("/", productController.get);
productRouter.post(
    "/",
    [validateMiddleware(validateProduct)],
    productController.post
);

module.exports = productRouter;
