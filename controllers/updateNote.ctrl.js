const NoteModel = require("../models/note.model");


exports.updateNote = async (req, res) => {
    console.log(`${req.method} ${req.originalUrl}`);

    try {
        const updated = await NoteModel.findOneAndUpdate({ authorId: req.body.authorId }, req.body, { returnDocument: "after", runValidators: true });
        return res.status(200).json({ message: `The document with id: ${updated._id} has been updated`, document: updated });
    } catch (error) {
        return res.json({ message: error.message, error });
    }
};