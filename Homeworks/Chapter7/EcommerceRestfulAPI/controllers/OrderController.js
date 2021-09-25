const OrderModel = require("../models/OrderModel.js");
const {
    orderValidate,
    orderUpdateValidate,
} = require("../middlewares/Validate.js");

class OrderController {
    getAllOrders = (req, res) => {
        OrderModel.find().exec((err, orders) => {
            if (err) {
                res.send("Khong the lay thong tin orders");
            } else {
                console.log("Lay thanh cong thong tin tat ca orders");
                console.log(orders);
                res.json(orders);
            }
        });
    };

    getOrderById = (req, res) => {
        OrderModel.find({ _id: req.params.id }).exec((err, order) => {
            if (err) {
                res.send("Khong the lay thong tin order");
            } else {
                console.log("Lay thanh cong thong tin order");
                console.log(order);
                res.json(order);
            }
        });
    };
    newOrder = (req, res) => {
        const { error, value } = orderValidate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        let order = new OrderModel(value);

        order.save((err, order) => {
            if (err) {
                res.send("Error luu thong tin order");
            } else {
                console.log("Luu thong tin order thanh cong", order);
                res.send(order);
            }
        });
    };
    updateOrderById = (req, res) => {
        const { error, value } = orderUpdateValidate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        OrderModel.findOneAndUpdate(
            { _id: req.params.id },
            { value },
            { upsert: true },
            (err, order) => {
                if (err) {
                    res.send("Xay ra loi update !!!");
                } else {
                    res.send("order updated");
                }
            }
        );
    };
    deleteOrderById = (req, res) => {
        OrderModel.findOneAndDelete({ _id: req.params.id }, (err, order) => {
            if (err) {
                res.send("Xay ra loi delete !!!");
            } else {
                res.send("order deleted");
            }
        });
    };
}

module.exports = new OrderController();
