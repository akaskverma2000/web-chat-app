import ws from '../utils/websocket.js';

/**
 * Sends a message via WebSocket to the server.
 * If the WebSocket connection is not open, displays an error message.
 */
export default function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();

    if (message !== '') {
        // Get the user ID from local storage
        const userId = localStorage.getItem('userId');

        if (!userId) {
            window.location.href = window.location.origin + '/pages/login.html';
            showToast('Oops! Looks like you need to log in before accessing the chat. Please log in to continue.', false);
            return;
        }

        // Create a message object that includes the user ID and the message content
        const messageObject = {
            userId,
            content: message
        };

        try {
            if (ws.readyState === WebSocket.OPEN) {
                ws.send(JSON.stringify(messageObject));
                messageInput.value = '';
                showToast('Message sent successfully! Hooray!', true);
            } else {
                console.error('WebSocket is not in OPEN state.');
                showToast('Uh-oh! It seems our chat service is currently unavailable. Please check your internet connection or try again later.', false);
            }
        } catch (error) {
            console.error('Error sending message:', error.message);
            showToast('Oops! Something went wrong while sending your message. Please try again later.', false);
        }
    }
}
