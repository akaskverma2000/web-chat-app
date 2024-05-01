const ws = new WebSocket('ws://localhost:8080');

/**
 * Logs a message to the console when the WebSocket connection is established.
 */
ws.addEventListener('open', function () {
    console.log('WebSocket connection established.');
});

/**
 * Listens for incoming messages from the WebSocket server and displays them in the chat interface.
 */
ws.addEventListener('message', function (event) {
    const messagesDiv = document.getElementById('messages');
    const timestamp = new Date().toLocaleTimeString();
    const messageContent = event.data;

    messagesDiv.innerHTML += `<p><span class="timestamp">${timestamp}</span> Server: ${messageContent}</p>`;
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to bottom
});

/**
 * Logs an error message to the console when there is an error with the WebSocket connection.
 */
ws.addEventListener('error', function (event) {
    console.error('WebSocket error:', event);
});

export default ws;
