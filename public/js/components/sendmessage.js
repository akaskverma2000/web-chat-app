import ws from '../utils/websocket.js';

/**
 * Sends a message via WebSocket to the server.
 * If the WebSocket connection is not open, displays an error message.
 */
export default function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();

    if (message !== '') {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(message);
            messageInput.value = '';
            showToast('Message sent successfully! Hooray!', true);
        } else {
            console.error('WebSocket is not in OPEN state.');
            showToast('Uh-oh! It seems our chat service is currently unavailable. Please check your internet connection or try again later.', false);
        }
    }
}
