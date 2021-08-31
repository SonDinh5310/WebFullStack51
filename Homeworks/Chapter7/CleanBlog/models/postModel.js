const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostModel = new Schema({
    postHeading: {
        type: String,
        required: true,
    },

    subHeading: {
        type: String,
        required: true,
    },

    postAuthor: {
        type: String,
        required: true,
    },

    createdAt: {
        type: String,
        required: true,
    },

    postContent: {
        type: String,
        required: true,
    },
});

module.exports = PostModel;
