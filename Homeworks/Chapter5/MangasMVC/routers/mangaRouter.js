const express = require("express");
const mangaRouter = express.Router();
const mangaController = require("../controllers/mangaController.js");
const validateManga = require("../middlewares/validate.js");
const validateMiddleware = require("../middlewares/validator.js");

mangaRouter.get("/", mangaController.getAll);
mangaRouter.get("/manga/:id", mangaController.getById);
mangaRouter.post(
    "/",
    [validateMiddleware(validateManga)],
    mangaController.post
);
mangaRouter.put(
    "/manga/:id",
    [validateMiddleware(validateManga)],
    mangaController.put
);
mangaRouter.delete("/manga/:id", mangaController.delete);

module.exports = mangaRouter;
