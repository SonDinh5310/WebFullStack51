const express = require("express");
const UserRouter = express.Router();
const UserController = require("../controllers/UserController.js");
const MiddlewareVerify = require("../middlewares/Verify.js");

UserRouter.get("/", UserController.getAllUsers);
UserRouter.get("/:id", MiddlewareVerify, UserController.getUserById);
UserRouter.get("/get/count", MiddlewareVerify, UserController.getTotalsUsers);
UserRouter.post("/register", UserController.register);
UserRouter.post("/login", UserController.login);
UserRouter.put("/:id", MiddlewareVerify, UserController.updateUserById);
UserRouter.delete("/:id", MiddlewareVerify, UserController.deleteUserById);

module.exports = UserRouter;
