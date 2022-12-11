const getAllProductsStatic = (req, res) => {
  res.status(200).send('Get all products - static');
};

const getAllProducts = (req, res) => {
  res.status(200).send('Get all products');
};

module.exports = { getAllProductsStatic, getAllProducts };
