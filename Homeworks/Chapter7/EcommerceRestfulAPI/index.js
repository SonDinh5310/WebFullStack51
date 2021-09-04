const express = require("express");
const router = require("./routers/router.js");
const mongoose = require("mongoose");

const app = express();
const db = "mongodb://localhost/eccomerce-restful-api";
const port = 3000;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

router(app);

app.listen(port, () => console.log("Server is running on port", port));
