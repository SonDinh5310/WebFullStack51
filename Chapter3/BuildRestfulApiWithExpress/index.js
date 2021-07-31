const Joi = require("joi");
const express = require("express");

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

// Lay danh sach cac loai truyen tranh
app.get("/api/manga", (req, res) => {
    res.send(mangas);
});

function validateMangas(manga) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });

    return schema.validate(manga);
}
app.post("/api/manga", (req, res) => {
    const { error, value } = validateMangas(req.body);
    if (error) return res.send(400).senmd(error.details[0].message);
    console.log(value);

    const manga = {
        id: mangas.length + 1,
        name: req.body.name,
    };
    mangas.push(manga);
    res.send(mangas);
});

// app.put("")

// app.delete("")

app.listen(8080, () => console.log("Server is running on port 8080"));
