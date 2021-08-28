const express = require("express");
const cartRouter = express.Router();
const cartController = require("../controllers/cartController.js");

cartRouter.get("/", cartController.get);
cartRouter.post("/", cartController.post);
cartRouter.put("/product/:id", cartController.put);
cartRouter.delete("/product/:id", cartController.delete);

module.exports = cartRouter;
