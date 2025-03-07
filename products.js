const Product = require('./models/Product');
const Store = require('./models/Store');

// Create a new product
app.post('/products', authenticateToken, async (req, res) => {
  const { name, regularPrice, dealPrice, tax } = req.body;
  try {
    const newProduct = await Product.create({
      name,
      regularPrice,
      dealPrice,
      tax,
      storeId: req.user.id, // storeId comes from the authenticated token
    });
    res.status(201).send(newProduct);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating product');
  }
});

// Fetch all products for the store
app.get('/products', authenticateToken, async (req, res) => {
  try {
    const products = await Product.findAll({
      where: { storeId: req.user.id },
    });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching products');
  }
});
