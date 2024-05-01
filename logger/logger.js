const { createLogger, format, transports } = require('winston');
const fs = require('fs');
const path = require('path');

// Create the log directory if it doesn't exist
const logDirectory = 'logger/logfiles';
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory, { recursive: true });
}

/**
 * Create a Winston logger with specified transports and format.
 * Logs are stored in 'logger/logfiles' directory.
 */
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ 
      filename: path.join(logDirectory, 'error.log'), 
      level: 'error' 
    }),
    new transports.File({ 
      filename: path.join(logDirectory, 'combined.log') 
    })
  ]
});

module.exports = logger;
