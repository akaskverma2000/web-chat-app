const logger = require('../../../logger/logger');
const Message = require('../../../models/Message');

/**
 * Handles incoming messages from the client.
 * Saves the message to the database and echoes it back to the client.
 * @param {WebSocket} ws - The WebSocket instance representing the client connection.
 * @param {String} message - The message received from the client.
 */
async function handleMessage(ws, message) {
  logger.info(`Received message: ${message}`);

  try {
    // Save the message to the database
    const savedMessage = await Message.create({ content: message });
    logger.info(`Message saved to database: ${JSON.stringify(savedMessage)}`);

    // Echo the received message back to the client
    ws.send(message);
  } catch (error) {
    logger.error(`Error handling message: ${error.message}`);
    // Notify the client about the error
    ws.send(JSON.stringify({ error: 'Failed to handle message' }));
  }
}

/**
 * Handles the WebSocket connection close event.
 * Logs the disconnection event.
 * @param {WebSocket} ws - The WebSocket instance representing the client connection.
 */
function handleClose(ws) {
  try {
    logger.info('Client disconnected');
  } catch (error) {
    logger.error(`Error handling close event: ${error.message}`);
    // You may choose to handle the error in a specific way or just log it
  }
}

module.exports = { handleMessage, handleClose };
