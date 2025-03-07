// models/Product.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  regularPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  dealPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  tax: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Product;
