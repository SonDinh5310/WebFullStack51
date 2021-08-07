const express = require("express");
const mangaRouter = express.Router();

app.get("/api/manga", (req, res) => {
    res.send(mangas);
});

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

function validateMangas(manga) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });

    return schema.validate(manga);
}

module.exports = mangaRouter;
