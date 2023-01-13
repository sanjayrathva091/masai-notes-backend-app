const NoteModel = require("../models/note.model");


exports.getNotes = async (req, res) => {
    console.log(`${req.method} ${req.originalUrl}`);

    try {
        const notes = await NoteModel.find();
        return res.status(200).json({ message: "The requested data fetched successfully.", data: notes });
    } catch (error) {
        return res.json({ message: error.message, error });
    }
};