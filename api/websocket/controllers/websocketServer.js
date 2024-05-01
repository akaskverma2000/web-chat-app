const WebSocket = require('ws');
const logger = require('../../../logger/logger');

/**
 * Initializes the WebSocket server and handles incoming connections.
 * @param {number} port - The port on which the WebSocket server should listen.
 * @param {function} handleConnection - The function to handle incoming WebSocket connections.
 * @param {function} handleMessage - The function to handle incoming messages.
 */
function initWebSocketServer(port, handleConnection, handleMessage) {
  const wss = new WebSocket.Server({ port });

  wss.on('listening', () => {
    logger.info(`WebSocket server started on port ${port}`);
  });

  // Handle incoming WebSocket connections
  wss.on('connection', (ws) => {
    handleConnection(ws, handleMessage);
  });

  wss.on('error', (error) => {
    logger.error(`WebSocket server error: ${error.message}`);
  });
}

module.exports = { initWebSocketServer };