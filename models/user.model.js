const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number },
    location: { type: String },
    username: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true }
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;