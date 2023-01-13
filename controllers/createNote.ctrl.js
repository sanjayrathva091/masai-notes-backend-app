const NoteModel = require("../models/note.model");

exports.createNote = async (req, res) => {
    console.log(`${req.method} ${req.originalUrl}`);

    try {
        const note = new NoteModel(req.body);
        const validationError = note.validateSync();
        if (validationError) {
            return res.status(400).json({ message: validationError._message, errorName: validationError.name });
        }
        const saved = await note.save();
        return res.status(201).json({ message: `The note document with id: ${saved._id} added successfully`, document: saved });
    } catch (error) {
        return res.json({ message: error.message, error });
    }
};