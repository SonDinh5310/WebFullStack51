const UserRouter = require("./UserRouter.js");

const router = (app) => {
    app.use("/api/v1/users", UserRouter);
};

module.exports = router;
