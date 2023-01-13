const express = require("express");
const { createNote } = require("../controllers/createNote.ctrl");
const { deleteNote } = require("../controllers/deleteNote.ctrl");
const { getNotes } = require("../controllers/getNotes.ctrl");
const { updateNote } = require("../controllers/updateNote.ctrl");
const { verifyAccessToken } = require("../middlewares/verifyAccessToken.middleware");
const notesRoutes = express.Router();

/**
 * @GET /notes
 * @description Returns requested notes
 * @access public
 */
notesRoutes.get("/", [verifyAccessToken], getNotes);

/**
 * @POST /notes/create
 * @description Creates a new note
 * @access private
 */
notesRoutes.post("/create", [verifyAccessToken], createNote);

/**
 * @PATCH /notes/update/:_id
 * @description Updates an existing note
 * @access private
 */
notesRoutes.patch("/update/:_id", [verifyAccessToken], updateNote);

/**
 * @DELETE /notes/delete/:_id
 * @description Deletes an existing note
 * @access private
 */
notesRoutes.delete("/delete/:_id", [verifyAccessToken], deleteNote);

module.exports = notesRoutes;