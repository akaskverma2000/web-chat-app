const { DataTypes } = require('sequelize');
const sequelize = require('../config/server/sequelize');

/** Define the Message model for storing chat messages */
const Message = sequelize.define('Message', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'users-permissions_user',
      key: 'id',
    }
  }
});

module.exports = Message;
