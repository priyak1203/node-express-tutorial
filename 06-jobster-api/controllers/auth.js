const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, UnAuthenticatedError } = require('../errors');

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      name: user.name,
      lastName: user.lastName,
      location: user.location,
      token,
    },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError('Please provide email and password');
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new UnAuthenticatedError('Invalid Credentials');
  }

  // compare password
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError('Invalid Credentials');
  }

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user: {
      email: user.email,
      name: user.name,
      lastName: user.lastName,
      location: user.location,
      token,
    },
  });
};

const updateUser = async (req, res) => {
  const { name, lastName, email, location } = req.body;
  if (!name || !lastName || !email || !location) {
    throw new BadRequestError('Please provide all values');
  }

  const user = await User.findOne({ _id: req.user.userId });
  user.name = name;
  user.lastName = lastName;
  user.email = email;
  user.location = location;

  await user.save();
  const token = user.createJWT();

  // Alternative approach which doesnt hash the password multiple times
  // const user = await User.findOneAndUpdate({ _id: req.user.userId }, req.body, {
  //   new: true,
  //   runValidators: true,
  // });
  // const token = user.createJWT();

  res.status(StatusCodes.OK).json({
    user: {
      email: user.email,
      name: user.name,
      lastName: user.lastName,
      location: user.location,
      token,
    },
  });
};

module.exports = {
  register,
  login,
  updateUser,
};
