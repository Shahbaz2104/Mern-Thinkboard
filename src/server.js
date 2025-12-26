import express from 'express';
import NotesRouter from './routes/notesRoutes.js';
import {connectDb } from './config/db.js ';
import dotenv from 'dotenv';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDb();  


app.use(express.json());
// app.use("/", NotesRouter)
app.use ("/api/notes", NotesRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

