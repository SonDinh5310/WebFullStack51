const UserModel = require("../models/usersModel.js");
const MangaModel = require("../models/mangasModel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
    registerValidate,
    loginValidate,
} = require("../middlewares/validate.js");

class UserController {
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

    register = async (req, res) => {
        // 1. Validate user info
        const { error } = registerValidate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        // 2. Check email exist in db
        const emailExists = await UserModel.findOne({ email: req.body.email });
        if (emailExists) return res.status(400).send("Email exists in db");

        // 3. Bcryptjs to encrypt password
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(req.body.password, salt);

        // 4. Create a new user
        const newUser = new UserModel();
        newUser.name = req.body.name;
        newUser.email = req.body.email;
        newUser.password = hashPassword;

        // 5. Return user for client
        try {
            const user = await newUser.save();
            res.send(user);
        } catch (e) {
            console.log("Has Error !!!");
            res.status(400).send(e);
        }
    };

    login = async (req, res) => {
        // 1. Validate user info
        const { error } = loginValidate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        // 2. Check email of user exists in db
        const user = await UserModel.findOne({ email: req.body.email });
        if (!user) return res.status(400).send("Email not exists in db");

        // 3. check password in database
        const loginPassword = await bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if (!loginPassword) return res.status(400).send("Password Incorrect");

        // 4. generated token string
        const token = jwt.sign({ id: user._id }, "chuoibimatkhongthetietlo");

        // 5. Return token for user
        res.header("auth-token", token).send(token);
    };
}

module.exports = new UserController();
