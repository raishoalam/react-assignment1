// db.js
const { Sequelize } = require('sequelize');

// Setup MySQL connection with Sequelize
const sequelize = new Sequelize('store_management', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
