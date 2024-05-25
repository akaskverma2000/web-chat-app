/**
 * Attempts to log in the user with the provided username and password.
 * If successful, returns the user's JWT token.
 * If unsuccessful, displays an error message.
 *
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise<Object>} The response data containing the JWT token if successful.
 */
export async function login(username, password) {
    const response = await fetch('https://web-chat-app-production.up.railway.app/auth/local', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            identifier: username,
            password: password
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        showToast(errorData.message, false);
        console.error('Failed to login into the web app:', errorData);
        return;
    }

    return await response.json();
}

/**
 * Attempts to sign up a new user with the provided username, email, and password.
 * If successful, returns the response data.
 * If unsuccessful, throws an error with the error message from the server.
 *
 * @param {string} username - The username of the new user.
 * @param {string} email - The email of the new user.
 * @param {string} password - The password of the new user.
 * @returns {Promise<Object>} The response data if successful.
 * @throws {Error} If signup fails, throws an error with the error message.
 */
export async function signup(username, email, password) {
    const response = await fetch('https://web-chat-app-production.up.railway.app/auth/local/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        showToast(errorData.message, false);
        console.error('Failed to login into the web app:', errorData);
        return;
    }

    return await response.json();
}

