const express = require("express");
const app = express();
const ejs = require("ejs");
const PORT = 4000;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.set("view engine", "ejs");
// Register public folder
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/contact", (req, res) => {
    res.render("contact");
});
app.get("/post", (req, res) => {
    res.render("post");
});

//Test page
app.listen(PORT, () => {
    console.log(`App starting success on port ${PORT} !!!`);
});
