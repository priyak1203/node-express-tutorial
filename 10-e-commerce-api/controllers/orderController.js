const Product = require('../models/Product');
const CustomError = require('../errors');

const createOrder = async (req, res) => {
  const { items: cartItems, shippingFee, tax } = req.body;

  // check if all the data are provided
  if (!cartItems || cartItems.length < 1) {
    throw new CustomError.BadRequestError('No cart items provided');
  }
  if (!tax || !shippingFee) {
    throw new CustomError.BadRequestError(
      'Please provide tax and shipping fee'
    );
  }

  let orderItems = [];
  let subTotal = 0;

  for (const item of cartItems) {
    const dbProduct = await Product.findOne({ _id: item.product });
    if (!dbProduct) {
      throw new CustomError.NotFoundError(
        `No product with id: ${item.product}`
      );
    }

    const { name, price, image, _id } = dbProduct;
    const singleOrderItem = {
      amount: item.amount,
      name,
      price,
      image,
      product: _id,
    };

    // add item to order items list
    orderItems = [...orderItems, singleOrderItem];

    // calculate subtotal
    subTotal += item.amount * price;
  }

  console.log(orderItems, subTotal);
  res.send('Create Order');
};

const getAllOrders = async (req, res) => {
  res.send('Get All Orders');
};

const getSingleOrder = async (req, res) => {
  res.send('Get Single Order');
};

const getCurrentUserOrders = async (req, res) => {
  res.send('Get Current User Orders');
};

const updateOrder = async (req, res) => {
  res.send('Update Order');
};

module.exports = {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder,
};
