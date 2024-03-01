const { StatusCodes } = require('http-status-codes');
const Review = require('../models/Review');
const Product = require('../models/Product');
const CustomError = require('../errors');

const createReview = async (req, res) => {
  const { userId } = req.user;
  const { product: productId } = req.body;

  // check if the product exists
  const isValidProduct = await Product.findOne({ _id: productId });
  if (!isValidProduct) {
    throw new CustomError.NotFoundError(`No product with id: ${productId}`);
  }

  // check if the user has already reviewed the product
  const alreadyReviewed = await Review.findOne({
    user: userId,
    product: productId,
  });

  if (alreadyReviewed) {
    throw new CustomError.BadRequestError(
      'Already submitted review for this product'
    );
  }

  req.body.user = userId;
  const review = await Review.create(req.body);

  res.status(StatusCodes.CREATED).json({ review });
};

const getAllReviews = async (req, res) => {
  res.send('Get All Reviews');
};

const getSingleReview = async (req, res) => {
  res.send('Get Single Review');
};

const updateReview = async (req, res) => {
  res.send('Update Review');
};

const deleteReview = async (req, res) => {
  res.send('Delete Review');
};

module.exports = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};
