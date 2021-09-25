const ProductModel = require("../models/ProductModel.js");
const {
    productValidate,
    productUpdateValidate,
} = require("../middlewares/Validate.js");

class ProductController {
    getAllProducts = (req, res) => {
        ProductModel.find().exec((err, products) => {
            if (err) {
                res.send("Khong the lay thong tin products");
            } else {
                console.log("Lay thanh cong thong tin tat ca products");
                console.log(products);
                res.json(products);
            }
        });
    };
    getProductById = (req, res) => {
        ProductModel.find({ _id: req.params.id }).exec((err, product) => {
            if (err) {
                res.send("Khong the lay thong tin product");
            } else {
                console.log("Lay thanh cong thong tin tat ca product");
                console.log(product);
                res.json(product);
            }
        });
    };
    addProduct = (req, res) => {
        const { error, value } = productValidate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        let product = new ProductModel(value);

        product.save((err, product) => {
            if (err) {
                res.send("Error luu thong tin product");
            } else {
                console.log("Luu thong tin product thanh cong", product);
                res.send(product);
            }
        });
    };
    updateProductById = (req, res) => {
        const { error, value } = productUpdateValidate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        ProductModel.findOneAndUpdate(
            { _id: req.params.id },
            value,
            { new: true },
            (err) => {
                if (err) {
                    res.send("Da xay ra loi khi update thong tin");
                } else {
                    res.send("Update thong tin thanh cong");
                }
            }
        );
    };
    deleteProductById = (req, res) => {
        ProductModel.findOneAndDelete(
            { _id: req.params.id },
            (err, product) => {
                if (err) {
                    res.send("Xay ra loi delete !!!");
                } else {
                    res.send("product deleted");
                }
            }
        );
    };
}

module.exports = new ProductController();
