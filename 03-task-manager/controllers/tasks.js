const Task = require('../models/Task');

const getAllTasks = (req, res) => {
  res.status(200).send('Get all tasks');
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const getTask = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ id });
};

const updateTask = (req, res) => {
  res.status(200).json(req.body);
};

const deleteTask = (req, res) => {
  res.status(200).json({ id: req.params.id });
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
