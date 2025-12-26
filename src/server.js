import express from 'express';
import NotesRouter from './routes/notesRoutes.js';
import {connectDb } from './config/db.js ';
import dotenv from 'dotenv';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDb();  


app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use ("/api/notes", NotesRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

