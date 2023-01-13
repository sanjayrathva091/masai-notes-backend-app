const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    priority: { type: String, required: true },
    isCompleted: { type: Boolean, required: true },
    authorId: { type: mongoose.SchemaTypes.ObjectId }
});

const NoteModel = mongoose.model('Note', NoteSchema);

module.exports = NoteModel;