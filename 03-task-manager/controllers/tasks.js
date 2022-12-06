const getAllTasks = (req, res) => {
  res.status(200).send('Get all tasks');
};

const createTask = (req, res) => {
  res.status(201).send('Create a task');
};

const getTask = (req, res) => {
  res.status(200).send('Get single task');
};

const updateTask = (req, res) => {
  res.status(200).send('Update a task');
};

const deleteTask = (req, res) => {
  res.status(200).send('Delete a task');
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
