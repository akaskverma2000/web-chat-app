const { handleConnection } = require('../../api/websocket/controllers/connectionHandler');
const { initWebSocketServer } = require('../../api/websocket/controllers/websocketServer');
const { handleMessage } = require('../../api/websocket/controllers/messageHandler');
const { initDatabase } = require('../../config/database/dbInitializer');
const logger = require('../../logger/logger');

/**
 * Initializes the WebSocket server.
 * @returns {Promise<void>}
 */
module.exports = async () => {
  try {
    const port = process.env.PORT;

    // Start the WebSocket server
    initWebSocketServer(port, handleConnection, handleMessage);

    initDatabase();
  } catch (err) {
    // Log any errors that occur during initialization
    logger.error('Error initializing WebSocket server:', err);
    // Optionally, rethrow the error to stop the Strapi server startup
    throw err;
  }
};
