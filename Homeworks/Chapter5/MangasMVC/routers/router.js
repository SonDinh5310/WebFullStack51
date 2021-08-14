const mangaRouter = require("./mangaRouter.js");

const router = (app) => {
    app.use("/mangas", mangaRouter);
};

module.exports = router;
