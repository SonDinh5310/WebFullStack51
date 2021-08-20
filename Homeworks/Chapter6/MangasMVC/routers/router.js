const mangaRouter = require("./mangaRouter.js");
const userRouter = require("./userRouter.js");
const middlewareVerify = require("../middlewares/validator.js");

const router = (app) => {
    app.use("/", userRouter);
    app.use("/mangas", middlewareVerify, mangaRouter);
};

module.exports = router;
