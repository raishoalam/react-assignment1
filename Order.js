// models/Order.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Product = require('./Product');

const Order = sequelize.define('Order', {
  orderId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  grandTotalWithoutTax: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  grandTotalWithTax: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Order.belongsTo(Product); // One-to-many relationship between Order and Product

module.exports = Order;
