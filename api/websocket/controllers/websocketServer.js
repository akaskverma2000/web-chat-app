const WebSocket = require('ws');
const logger = require('../../../logger/logger');

/**
 * Initializes the WebSocket server and handles incoming connections.
 * @param {object} server - The HTTP server instance.
 * @param {function} handleConnection - The function to handle incoming WebSocket connections.
 * @param {function} handleMessage - The function to handle incoming messages.
 */
function initWebSocketServer(server, handleConnection, handleMessage) {
  const wss = new WebSocket.Server({ server });

  wss.on('listening', () => {
    logger.info('WebSocket server started and attached to the HTTP server');
  });

  // Handle incoming WebSocket connections
  wss.on('connection', (ws) => {
    handleConnection(ws, handleMessage);
  });

  wss.on('error', (error) => {
    logger.error(`WebSocket server error: ${error.message}`);
    throw new Error('Oops! Something went wrong with the WebSocket server.');
  });
}

module.exports = { initWebSocketServer };
