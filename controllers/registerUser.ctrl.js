const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");

exports.registerUser = async (req, res) => {
    console.log(`${req.method} ${req.originalUrl}`);

    try {
        const user = new UserModel(req.body);
        const validationError = user.validateSync();
        if (validationError) {
            return res.status(401).json({ message: validationError.message, error: validationError });
        }
        const saltRounds = Math.floor(Math.random() * 3 + 8);
        user.password = bcrypt.hashSync(user.password, saltRounds);
        const saved = await user.save();
        return res.status(201).json({ message: "Registration successful!", user: saved });
    } catch (error) {
        if (error.code === 11000) return res.status(409).json({ message: "User already registered!" })
        return res.json({ message: error.message, error });
    }
};