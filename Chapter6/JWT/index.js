const express = require("express");
const app = express();
const mongoose = require("mongoose");

// import router
const indexRouter = require("./router/index.js");

// connect to mongodb
const db = "mongodb://localhost/jwt-example";
const port = 4001;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("api working");
});

app.use("/api/user", indexRouter);

app.listen(port, () => {
    console.log("app listening on port: ", port);
});
