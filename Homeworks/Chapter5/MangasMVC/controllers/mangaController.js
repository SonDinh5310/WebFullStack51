const MangaModel = require("../models/mangasModel.js");

class MangaController {
    // [GET] /mangas
    getAll = (req, res) => {
        console.log(req.query.name);
        MangaModel.find({}).exec((err, mangas) => {
            if (err) {
                res.send("Khong the lay thong tin mangas");
            } else {
                console.log("Lay thanh cong mangas");
                console.log(mangas);
                res.json(mangas);
            }
        });
    };
    // [GET] /manga/:id
    getById = (req, res) => {
        MangaModel.findOne({ _id: req.params.id }).exec((err, manga) => {
            if (err) {
                res.send("Co loi xay ra...Khong the lay manga");
            } else {
                console.log("get manga by ID");
                res.json(manga);
            }
        });
    };
    // [POST] /mangas
    post = (req, res) => {
        let manga = new MangaModel();
        manga.name = req.body.name;
        manga.author = req.body.author;
        manga.price = req.body.price;

        manga.save((err, manga) => {
            if (err) {
                res.send("Error luu thong tin manga");
            } else {
                console.log("Luu thong tin manga thanh cong", manga);
                res.send(manga);
            }
        });
    };
    // [PUT] /manga/:id
    put = (req, res) => {
        MangaModel.findOneAndUpdate(
            { _id: req.params.id },
            {
                name: req.body.name,
                author: req.body.author,
                price: req.body.price,
            },
            { upsert: true },
            (err, manga) => {
                if (err) {
                    res.send("Xay ra loi update !!!");
                } else {
                    res.send("manga updated");
                }
            }
        );
    };
    delete = (req, res) => {
        MangaModel.findOneAndDelete({ _id: req.params.id }, (err, manga) => {
            if (err) {
                res.send("Xay ra loi delete !!!");
            } else {
                res.send("Manga deleted");
            }
        });
    };
}

module.exports = new MangaController();
