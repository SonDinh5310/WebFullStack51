const express = require("express");
const router = require("./routers/router.js");
const mongoose = require("mongoose");

const app = express();
// connect to mongodb
const db = "mongodb://localhost/mangas-mvc";
const port = 8080;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

router(app);

app.listen(port, () => console.log("Server is running on port", port));
