const getAllUsers = (req, res) => {
  res.send('Get all users');
};

const getSingleUser = (req, res) => {
  res.send('Get single user');
};

const showCurrentUser = (req, res) => {
  res.send('Show current user');
};

const updateUser = (req, res) => {
  res.send('Update user');
};

const updateUserPassword = (req, res) => {
  res.send('Update user password');
};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
};
