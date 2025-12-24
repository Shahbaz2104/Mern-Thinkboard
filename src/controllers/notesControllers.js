const getAllNotes = (req, res) => {
  res.send('Get all notes');
};

const createNote = (req, res) => {
  res.send('Create a new note');
};

const updateNote = (req, res) => {
  const { id } = req.params;
  res.send(`Update note with ID ${id}`);
};

const deleteNote = (req, res) => {
  const { id } = req.params;
  res.send(`Delete note with ID ${id}`);
};

export { getAllNotes, createNote, updateNote, deleteNote };