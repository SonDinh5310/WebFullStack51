const Joi = require("joi");

const validateManga = (manga) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        author: Joi.string().min(6).required(),
        price: Joi.number().integer().min(10000).required(),
    });
    console.log("joi validated");
    console.log(schema.validate(manga));
    return schema.validate(manga);
};

module.exports = validateManga;
