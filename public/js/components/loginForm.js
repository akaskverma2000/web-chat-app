import { login } from '../services/api.js';
import { validateLoginForm } from '../utils/formValidation.js';

const loginForm = document.getElementById('loginForm');

/**
 * Adds an event listener to the login form for submitting the login credentials.
 * If login is successful, stores the JWT token in local storage and redirects to the chat page.
 * If login fails, displays an error message.
 */
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateLoginForm()) {
        return;
    }

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const data = await login(username, password);

        if (data?.jwt) {
            localStorage.setItem('token', data.jwt);
            localStorage.setItem('userId', data.user.id);
            showToast('Great job! You have successfully logged into the web chat app.Welcome aboard!', true);
            window.location.href = window.location.origin + '/pages/chat.html';
        }
    } catch (error) {
        showToast('Oops! It looks like we are having trouble connecting to the server. Please check your internet connection and try again', false);
    }
});
