import { displayMessage } from '../components/displaymessage.js';

/**
 * Fetches messages from the server and displays them in the chat interface.
 * If the user is not logged in, redirects to the login page.
 */
export async function fetchMessages() {
    try {
        // Retrieve JWT token from localStorage
        const token = localStorage.getItem('token');

        // Check if token is available
        if (!token) {
            showToast('Oops! Looks like you need to log in before accessing the chat. Please log in to continue.', false);
            window.location.href = window.location.origin + '/pages/login.html';
            return;
        }

        const response = await fetch('http://127.0.0.1:8080/messages', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            if (response.status === 401) {
                window.location.href = window.location.origin + '/pages/login.html';
                showToast('Oops! Looks like you need to log in before accessing the chat. Please log in to continue.', false);
                return;
            }
            showToast('Oops! Something went wrong. Please refresh the page and try again.', false);
            console.error('Failed to fetch messages:', response);
            return;
        }

        const messages = await response.json();
        messages.forEach(message => {
            displayMessage(message);
        });
    } catch (error) {
        console.error('Error fetching messages:', error);
        showToast('Oops! Something went wrong. Please refresh the page and try again.', false);
    }
}
