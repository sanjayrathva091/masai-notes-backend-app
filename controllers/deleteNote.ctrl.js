const NoteModel = require("../models/note.model");


exports.deleteNote = async (req, res) => {
    console.log(`${req.method} ${req.originalUrl}`);

    try {
        const deleted = await NoteModel.findByIdAndDelete({ _id: req.params._id, authorId: req.body.authorId });
        return res.status(200).json({ message: `The document with id: ${deleted._id} has been deleted.`, document: deleted });
    } catch (error) {
        return res.json({ message: error.message, error });
    }
};