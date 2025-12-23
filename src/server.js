import express from 'express';
import router from './routes/notesRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/api/notes', router);

// Example route handlers (commented out)




// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// app.post(`/data`, (req, res) => {
//   res.send('Data received!');
// });

// app.put(`/data/:id`, (req, res) => {
//   const { id } = req.params;
//   res.send(`Data with ID ${id} updated!`);
// });

// app.delete(`/data/:id`, (req, res) => {
//   const { id } = req.params;
//   res.send(`Data with ID ${id} deleted!`);
// }); 

