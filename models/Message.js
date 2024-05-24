const mongoose = require('mongoose');

/** Define the Message schema for storing chat messages */
const messageSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
