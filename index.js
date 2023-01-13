require("dotenv").config();
const express = require("express");
const connectDB = require("./configs/db.config");
const notesRoutes = require("./routes/notes.routes");
const userRoutes = require("./routes/users.routes");


const app = express();

// use middlewares
app.use(express.json());

// use routes
app.use("/api/auth", userRoutes);
app.use("/api/notes", notesRoutes);

// listen application at port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    connectDB();
    console.log(`The server listening on port ${PORT}`);
});