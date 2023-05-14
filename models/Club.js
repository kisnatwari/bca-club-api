const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Club = sequelize.define('Club', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  clubname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fee:{
    type: DataTypes.INTEGER,
    allowNull:false
  }
});

module.exports = Club;