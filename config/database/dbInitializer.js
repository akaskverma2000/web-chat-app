const mongoose = require('mongoose');
const logger = require('../../logger/logger');
const Message = require('../../models/Message'); // Ensure this model is defined using Mongoose

/**
 * Initializes the database connection.
 * Throws an error if unable to connect to the database.
 */
async function initDatabase() {
  const dbUri = process.env.DATABASE_URI;

  try {
    // Connect to MongoDB using Mongoose
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info('Database connection has been established successfully.');
  } catch (error) {
    // Throw the error to be caught and handled by the calling code
    throw new Error('Unable to connect to the database: ' + error.message);
  }
}

module.exports = { Message, initDatabase };
