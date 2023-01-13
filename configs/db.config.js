require("dotenv").config();
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        const conns = await mongoose.connect(`${MONGO_URI}`);
        console.log(`connected to mongoDB`);
    } catch (error) {
        console.error(`${error.message}; Process exiting ...`);
        process.exit(1);
    }
};

module.exports = connectDB;