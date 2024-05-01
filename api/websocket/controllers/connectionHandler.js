const logger = require('../../../logger/logger');
const { handleMessage, handleClose } = require('./messageHandler');

/**
 * Handles WebSocket connection events.
 * Logs client connection and sets up message and close handlers.
 * @param {WebSocket} ws - The WebSocket instance representing the client connection.
 */
function handleConnection(ws) {
  logger.info('Client connected');

  // Handle incoming messages from clients
  ws.on('message', function incoming(message) {
    handleMessage(ws, message);
  });

  // Handle client disconnection
  ws.on('close', () => {
    handleClose(ws);
  });
}

module.exports = { handleConnection };
