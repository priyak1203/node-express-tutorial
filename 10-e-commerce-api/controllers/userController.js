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
  res.status(StatusCodes.OK).json({ user: req.user });
};

const updateUser = (req, res) => {
  res.send(req.body);
};

const updateUserPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword) {
    throw new CustomError.BadRequestError('Please provide both values');
  }

  const user = await User.findOne({ _id: req.user.userId });

  const isPasswordCorrect = await user.comparePassword(oldPassword);
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError('Invalid Credentials');
  }

  user.password = newPassword;

  await user.save();

  res.status(StatusCodes.OK).json({ msg: 'Success! Password updated.' });
};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
};
