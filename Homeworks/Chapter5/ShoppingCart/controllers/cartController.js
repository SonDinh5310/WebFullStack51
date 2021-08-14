const CartModel = require("../models/cartModel.js");

class CartController {
    //[GET] /
    get = (req, res) => {
        console.log(req.query.name);
        CartModel.find({}).exec((err, cart) => {
            if (err) {
                res.send("Khong the lay thong tin cart");
            } else {
                console.log("Lay thanh cong cart");
                // console.log(products);
                // res.send(products);
                res.render("cart", { cart });
            }
        });
    };
    //[POST] /
    post = (req, res) => {
        let cart = new CartModel();
        cart.name = req.body.name;
        cart.image = req.body.image;
        cart.price = req.body.price;

        cart.save((err, cart) => {
            if (err) {
                res.send("Error luu thong tin cart");
            } else {
                console.log("Luu thong tin cart thanh cong", cart);
                res.send(cart);
            }
        });
    };
    //[PUT] /cart/:id
    put = (req, res) => {
        CartModel.findOneAndUpdate(
            { _id: req.params.id },
            {
                name: req.body.name,
                image: req.body.image,
                price: req.body.price,
                amount: req.body.amount,
            },
            { upsert: true },
            (err, cart) => {
                if (err) {
                    res.send("Xay ra loi update !!!");
                } else {
                    res.send("cart updated");
                }
            }
        );
    };
    //[DELETE] /cart/:id
    delete = (req, res) => {
        CartModel.findOneAndDelete({ _id: req.params.id }, (err, cart) => {
            if (err) {
                res.send("Xay ra loi delete !!!");
            } else {
                res.send("cart deleted");
            }
        });
    };
}

module.exports = new CartController();
