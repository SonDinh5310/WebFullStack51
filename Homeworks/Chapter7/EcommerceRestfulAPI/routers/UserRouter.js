const express = require("express");
const UserRouter = express.Router();
const UserController = require("../controllers/UserController.js");

UserRouter.get("/", UserController.getAllUsers);
UserRouter.get("/:id", UserController.getUserById);
UserRouter.get("/get/count", UserController.getTotalsUsers);
UserRouter.post("/register", UserController.register);
UserRouter.post("/login", UserController.login);
UserRouter.put("/:id", UserController.updateUserById);
UserRouter.delete("/:id", UserController.deleteUserById);

module.exports = UserRouter;
