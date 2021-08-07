const Joi = require("joi");
const express = require("express");
const mangaRouter = require("./router/mangaRouter.js");
const userRouter = require("./router/userRouter.js");

const app = express();

app.use(express.json());

// Danh sach cac loai truyen tranh
const mangas = [
    {
        id: "1",
        name: "Trinh tham",
    },
    {
        id: "2",
        name: "Trinh ma",
    },
    {
        id: "3",
        name: "Lang man",
    },
];

app.use("/api/manga", mangaRouter);
app.use("/api/user", userRouter);

app.listen(8080, () => console.log("Server is running on port 8080"));
