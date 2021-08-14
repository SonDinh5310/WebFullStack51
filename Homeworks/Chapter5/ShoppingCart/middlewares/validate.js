const Joi = require("joi");

const validateProduct = (product) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        image: Joi.string().dataUri().required(),
        price: Joi.number().integer().min(1000).required(),
    });
    return schema.validate(product);
};
const validateCart = (product) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        image: Joi.string().dataUri().required(),
        price: Joi.number().integer().min(1000).required(),
        amount: Joi.number().integer().min(1).required(),
    });
    return schema.validate(product);
};

module.exports = { validateProduct, validateCart };
