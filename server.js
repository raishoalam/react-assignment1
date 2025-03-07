const express = require('express');
const sequelize = require('./db');
const Product = require('./models/Product');
const Order = require('./models/Order');
const Store = require('./models/Store');

const app = express();
app.use(express.json());

// Sync Sequelize models with the database
sequelize.sync()
  .then(() => console.log('Database synchronized'))
  .catch(err => console.log('Error syncing database:', err));

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
