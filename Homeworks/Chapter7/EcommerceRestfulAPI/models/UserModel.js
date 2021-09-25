const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    // _id: mongoose.ObjectId,
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
        default: "",
    },
    city: {
        type: String,
        default: "",
    },
    country: {
        type: String,
        default: "",
    },
    avatar: {
        type: String, // URL only
        default: "",
    },
});

UserSchema.path("_id").ref("User");

module.exports = mongoose.model("User", UserSchema);
