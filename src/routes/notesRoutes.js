import express from 'express';
import { createNote, getAllNotes, updateNote , deleteNote } from '../controllers/notesControllers.js';

const NotesRouter = express.Router();

NotesRouter.get('/', getAllNotes);
NotesRouter.post('/', createNote);
NotesRouter.put('/:id', updateNote);
NotesRouter.delete('/:id', deleteNote);

export default NotesRouter;