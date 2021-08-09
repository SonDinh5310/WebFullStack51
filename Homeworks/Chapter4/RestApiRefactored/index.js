const express = require("express");
const courseRouter = require("./router/courseRouter.js");
const userRouter = require("./router/userRouter.js");

const app = express();

app.use(express.json());

app.use("/api/courses", courseRouter);
app.use("/api/users", userRouter);

app.listen(3000, () => console.log("Server is running on port 3000"));
