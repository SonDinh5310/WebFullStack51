const productRouter = require("./productRouter.js");
const cartRouter = require("./cartRouter.js");

const router = (app) => {
    app.use("/", productRouter);
    app.use("/cart", cartRouter);
};

module.exports = router;
