const ProductModel = require("../models/productModel.js");
const { validateProduct } = require("../middlewares/validate.js");

class ProductController {
    //[GET] /products
    get = (req, res) => {
        ProductModel.find({}).exec((err, products) => {
            if (err) {
                res.send("Khong the lay thong tin products");
            } else {
                console.log("Lay thanh cong products");
                // console.log(products);
                // res.send(products);
                res.render("home", { products });
            }
        });
    };
    //[POST] /products
    post = (req, res) => {
        const { error } = validateProduct(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        let product = new ProductModel();
        product.name = req.body.name;
        product.image = req.body.image;
        product.price = req.body.price;

        product.save((err, product) => {
            if (err) {
                res.send("Error luu thong tin product");
            } else {
                console.log("Luu thong tin product thanh cong", product);
                res.send(product);
            }
        });
    };
}

module.exports = new ProductController();
