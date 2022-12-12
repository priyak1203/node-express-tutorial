const Product = require('../models/Product');

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ nbHits: products.length, products });
};

const getAllProducts = (req, res) => {
  res.status(200).send('Get all products');
};

module.exports = { getAllProductsStatic, getAllProducts };
