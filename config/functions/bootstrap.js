const http = require('http');
const Koa = require('koa');
const app = new Koa();
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

    // Create the HTTP server
    const server = http.createServer(app.callback());

    // Start the WebSocket server
    initWebSocketServer(server, handleConnection, handleMessage);

    // Start the HTTP server
    server.listen(port, () => {
      logger.info(`HTTP server started on port ${port}`);
    });

    // Initialize the database
    initDatabase();
  } catch (err) {
    // Log any errors that occur during initialization
    logger.error('Error initializing server:', err);
    // Optionally, rethrow the error to stop the Strapi server startup
    throw err;
  }
};
