let currentDay = null; // Variable to keep track of the current day

/**
 * Displays a message in the chat interface, including the message content and timestamp.
 * If the message is from a new day, a new message box is created to display the date.
 *
 * @param {Object} message - The message object containing content and timestamp.
 */
export function displayMessage(message) {
    const messagesDiv = document.getElementById('messages');
    const formattedTimestamp = new Date(message.timestamp);
    const messageDate = formattedTimestamp.toDateString();

    if (messageDate !== currentDay) {
        // If message is from a new day, create a new message box
        currentDay = messageDate;
        messagesDiv.innerHTML += `<div class="message-box"><p><strong>${currentDay}</strong></p></div>`;
    }

    const messageTime = formattedTimestamp.toLocaleTimeString();
    const messageContent = message.content;
    messagesDiv.innerHTML += `<p><span class="timestamp">${messageTime}</span> ${messageContent}</p>`;

    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to bottom
}
