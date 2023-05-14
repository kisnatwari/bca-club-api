const { Sequelize } = require('sequelize');

const dbName = process.env.DATABASE_NAME;
const dbUser = process.env.DATABASE_USERNAME;
const dbPassword = process.env.DATABASE_PASSWORD;
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;