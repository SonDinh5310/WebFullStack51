const UserRouter = require("./UserRouter.js");
const ProductRouter = require("./ProductRouter.js");
const OrderRouter = require("./OrderRouter.js");

const router = (app) => {
    app.use("/api/v1/users", UserRouter);
    app.use("/api/v1/products", ProductRouter);
    app.use("/api/v1/orders", OrderRouter);
};

module.exports = router;
