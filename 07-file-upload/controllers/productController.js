const createProduct = (req, res) => {
  res.send('Create Product');
};

const getAllProducts = (req, res) => {
  res.send('Get All Products');
};

module.exports = {
  createProduct,
  getAllProducts,
};
