const sequelize = require('../server/sequelize');
const logger = require('../../logger/logger');
const Message = require('../../models/Message');

/***
 * Initializes the database connection and synchronizes models with the database.
 * Throws an error if unable to connect to the database.
 */
async function initDatabase() {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // Sync all defined models with the database
    logger.info('Database connection has been established successfully.');
  } catch (error) {
    // Throw the error to be caught and handled by the calling code
    throw new Error('Unable to connect to the database: ' + error.message);
  }
}

initDatabase();

module.exports = { Message };
