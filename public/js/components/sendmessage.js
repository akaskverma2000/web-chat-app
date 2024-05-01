import ws from '../utils/websocket.js';

export default function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();

    if (message !== '') {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(message);
            messageInput.value = '';
        } else {
            console.error('WebSocket is not in OPEN state.');
            showToast('Uh-oh! It seems our chat service is currently unavailable. Please check your internet connection or try again later.', false);
        }
    }
}
