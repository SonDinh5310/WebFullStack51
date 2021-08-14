const express = require("express");
const mongoose = require("mongoose");
const router = require("./routers/router.js");
const exphbs = require("express-handlebars");
const path = require("path");
const Handlebars = require("handlebars");
const {
    allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

const app = express();
// connect to mongodb
const db = "mongodb://localhost/shopping-cart";
const port = 3333;

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
app.use(express.static(path.join(__dirname, "public")));

app.engine(
    "hbs",
    exphbs({
        handlebars: allowInsecurePrototypeAccess(Handlebars),
        extname: ".hbs",
        layoutsDir: "./views/layouts",
    })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/views/"));

router(app);

app.listen(port, () => console.log("Server is running on port", port));
