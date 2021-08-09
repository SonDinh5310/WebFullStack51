const express = require("express");
const Joi = require("joi");
const userRouter = express.Router();

let users = [
    {
        user_id: "5c99jtyd4",
        name: "Son",
        age: 20,
        email: "email@example.com",
        address: "Ha Noi",
    },
    {
        user_id: "zuggk0j2j",
        name: "Long",
        age: 19,
        email: "email@example.com",
        address: "Ho Chi Minh",
    },
    {
        user_id: "lxqat2hj7",
        name: "Linh",
        age: 17,
        email: "email@example.com",
        address: "Da Nang",
    },
    {
        user_id: "5cw1lujnn",
        name: "Phuong",
        age: 22,
        email: "email@example.com",
        address: "Ha Long",
    },
    {
        user_id: "drhz6ldor",
        name: "Thu",
        age: 18,
        email: "email@example.com",
        address: "Hai Phong",
    },
];

userRouter.get("/", (req, res) => {
    res.status(200).send(users);
});

userRouter.get("/:id", (req, res) => {
    const getUserIndex = users
        .map((user) => user.user_id.toString())
        .indexOf(req.params.id);

    if (getUserIndex === -1) return res.status(404).send("User not found.");

    res.status(200).send(users[getUserIndex]);
});

userRouter.post("/", (req, res) => {
    const { error, value } = validateUserInfos(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = {
        id: randomID(),
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        address: req.body.address,
    };
    users.push(user);
    res.status(200).send(users);
});

userRouter.put("/:id", (req, res) => {
    const { error, value } = validateUserInfos(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const updateUserIndex = users
        .map((user) => user.user_id.toString())
        .indexOf(req.params.id);

    if (updateUserIndex === -1) return res.status(404).send("User not found.");

    updateUser(updateUserIndex, req.body);
    res.status(200).send(users);
});

userRouter.delete("/:id", (req, res) => {
    const deleteUserIndex = users
        .map((user) => user.user_id.toString())
        .indexOf(req.params.id);

    if (deleteUserIndex === -1) return res.status(404).send("user not found.");

    users.splice(deleteUserIndex, 1);
    res.status(200).send(users);
});

const validateUserInfos = (user) => {
    const schema = Joi.object({
        name: Joi.string().min(2).required(),
        age: Joi.number().min(18).required(),
        email: Joi.string()
            .email({
                minDomainSegments: 2,
                tlds: { allow: ["com", "net"] },
            })
            .required(),
        address: Joi.string().min(5).required(),
    });

    return schema.validate(user);
};

const updateUser = (index, updateData) => {
    users[index].name = updateData.name;
    users[index].age = updateData.age;
    users[index].email = updateData.email;
    users[index].address = updateData.address;
};

const randomID = () => {
    return Math.random().toString(36).substr(2, 9);
};

module.exports = userRouter;
