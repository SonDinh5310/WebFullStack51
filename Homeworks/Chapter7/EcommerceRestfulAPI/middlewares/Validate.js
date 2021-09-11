const Joi = require("joi");

const userValidate = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().min(10).required(),
        passwordHash: Joi.string().required(),
        phone: Joi.string().required(),
        street: Joi.string(),
        city: Joi.string(),
        country: Joi.string(),
        avatar: Joi.string(),
    });
    return schema.validate(data);
};

const userUpdateValidate = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3),
        email: Joi.string().email().min(10),
        passwordHash: Joi.string(),
        phone: Joi.string(),
        street: Joi.string(),
        city: Joi.string(),
        country: Joi.string(),
        avatar: Joi.string(),
    });
    return schema.validate(data);
};

const registerValidate = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        phone: Joi.string()
            .length(10)
            .pattern(
                /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/
            ),
        email: Joi.string().email().min(10).required(),
        password: Joi.string().min(6).required(),
    });
    return schema.validate(data);
};

const loginValidate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().min(10).required(),
        password: Joi.string().min(6).required(),
    });
    return schema.validate(data);
};

const productValidate = (data) => {
    const schema = Joi.object({});
    return schema.validate(data);
};

const categoryValidate = (data) => {
    const schema = Joi.object({});
    return schema.validate(data);
};

const orderValidate = (data) => {
    const schema = Joi.object({});
    return schema.validate(data);
};

const itemValidate = (data) => {
    const schema = Joi.object({});
    return schema.validate(data);
};

module.exports = {
    userValidate,
    userUpdateValidate,
    registerValidate,
    loginValidate,
};
