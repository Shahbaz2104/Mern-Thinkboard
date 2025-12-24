import express from 'express';
import router from './routes/notesRoutes.js';


const app = express();
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.use("/", router)