const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    role: {
        type: Boolean,
        default: false, //1: admin, 2: manager, 3: customer
    },
    street: {
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    avatar: {
        type: String, // URL only
    },
});

module.exports = mongoose.model("User", UserSchema);
