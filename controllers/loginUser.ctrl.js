const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

exports.loginUser = async (req, res) => {
    console.log(`${req.method} ${req.originalUrl}`);

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required." });
        }
        const oldUser = await UserModel.findOne({ email });
        if (!oldUser) {
            return res.status(404).json({ message: "User does not exist. Please signup" });
        }
        const checkPassword = bcrypt.compareSync(password, oldUser.password);
        if (!checkPassword) {
            return res.status(401).json({ message: "Wrong password. Please try again." });
        }
        const JwtSecretKey = process.env.JWT_SECRET_KEY;
        const accessToken = jwt.sign({ ...oldUser }, JwtSecretKey);
        return res.status(200).json({ message: "User logged in successfully.", accessToken });
    } catch (error) {
        return res.status(error.code).json({ message: error.message, error });
    }
};