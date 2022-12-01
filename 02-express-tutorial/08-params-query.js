const express = require('express');
const app = express();

const { products } = require('./data');

app.get('/', (req, res) => {
  res
    .status(200)
    .send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

// all products
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.status(200).send(newProducts);
});

// single product
app.get('/api/products/:productID', (req, res) => {
  //   console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );

  if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist');
  }

  return res.status(200).json(singleProduct);
});

// complex route params
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  //   console.log(req.params);
  res.status(200).send('Hello World');
});

app.get('/api/v1/query', (req, res) => {
  //   console.log(req.query);
  const { search, limit } = req.query;

  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    // return res.status(200).send('No Products Matched Your Search');
    return res.status(200).json({ success: true, data: [] });
  }

  return res.status(200).json(sortedProducts);
});

app.all('*', (req, res) => {
  res.status(404).send('<h1>Resource Not Found</h1>');
});

app.listen(5000, () => console.log('Server listening on PORT: 5000'));
