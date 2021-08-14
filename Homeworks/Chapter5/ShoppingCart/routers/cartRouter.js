const express = require("express");
const cartRouter = express.Router();
const cartController = require("../controllers/cartController.js");
const { validateCart } = require("../middlewares/validate.js");
const validateMiddleware = require("../middlewares/validator.js");

cartRouter.get("/", cartController.get);
cartRouter.post("/", [validateMiddleware(validateCart)], cartController.post);
cartRouter.put(
    "/product/:id",
    [validateMiddleware(validateCart)],
    cartController.put
);
cartRouter.delete("/product/:id", cartController.delete);

module.exports = cartRouter;
