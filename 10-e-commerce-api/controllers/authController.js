const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const User = require('../models/User');

const register = async (req, res) => {
  const { email, name, password } = req.body;

  // checking for duplicate email value
  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError('Email already exists');
  }

  // first registered user is an admin
  const isFirstAccount = (await User.countDocuments({})) === 0;
  const role = isFirstAccount ? 'admin' : 'user';

  const user = await User.create({ email, name, password, role });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = (req, res) => {
  res.send('Login User');
};

const logout = (req, res) => {
  res.send('Logout User');
};

module.exports = {
  register,
  login,
  logout,
};
