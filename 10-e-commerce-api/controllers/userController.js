const { StatusCodes } = require('http-status-codes');
const User = require('../models/User');
const CustomError = require('../errors');

const getAllUsers = async (req, res) => {
  console.log(req.user);
  //   const users = await User.find({ role: 'user' }, { password: 0 });
  const users = await User.find({ role: 'user' }).select('-password');
  res.status(StatusCodes.OK).json({ users });
};

const getSingleUser = async (req, res) => {
  console.log(req.user);
  const { id } = req.params;

  const user = await User.findOne({ _id: id }).select('-password');
  if (!user) {
    throw new CustomError.NotFoundError(`No user with id: ${id}`);
  }

  res.status(StatusCodes.OK).json({ user });
};

const showCurrentUser = (req, res) => {
  res.send('Show current user');
};

const updateUser = (req, res) => {
  res.send(req.body);
};

const updateUserPassword = (req, res) => {
  res.send(req.body);
};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
};
