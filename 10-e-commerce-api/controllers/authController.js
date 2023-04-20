const register = (req, res) => {
  res.send('Register User');
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
