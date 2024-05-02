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
    const { userId, content } = JSON.parse(message);

    // Save the message to the database
    const savedMessage = await Message.create({ content: content, user_id: userId });
    logger.info(`Message saved to database: ${JSON.stringify(savedMessage)}`);

    // Echo the received message back to the client
    ws.send(content);
  } catch (error) {
    logger.error(`Error handling message: ${error.message}`);
    // Notify the client about the error
    throw new Error('Oops! Something went wrong while handling your message. Please try again.');
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
    throw new Error('Oops! Something went wrong while handling the close event.');
  }
}

module.exports = { handleMessage, handleClose };
