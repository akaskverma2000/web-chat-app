import sendMessage from './sendmessage.js';
import { fetchMessages } from '../services/fetchmessages.js';

// Get the send button element
const sendButton = document.getElementById('sendButton');

// Add a click event listener to the send button
sendButton.addEventListener('click', sendMessage);

// Call fetchMessages when the page loads
window.addEventListener('load', fetchMessages);
