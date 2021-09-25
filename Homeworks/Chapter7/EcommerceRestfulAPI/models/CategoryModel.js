const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    // _id: mongoose.ObjectId,
    name: {
        type: String,
    },
    icon: {
        type: String,
    },
});

module.exports = mongoose.model("Category", CategorySchema);
