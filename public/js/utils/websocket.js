const ws = new WebSocket('ws://localhost:8080');

ws.addEventListener('open', function () {
    console.log('WebSocket connection established.');
});

ws.addEventListener('message', function (event) {
    const messagesDiv = document.getElementById('messages');
    const timestamp = new Date().toLocaleTimeString();
    const messageContent = event.data;

    messagesDiv.innerHTML += `<p><span class="timestamp">${timestamp}</span> Server: ${messageContent}</p>`;
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to bottom
});

ws.addEventListener('error', function (event) {
    console.error('WebSocket error:', event);
});

export default ws;
