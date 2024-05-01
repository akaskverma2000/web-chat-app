// signupForm.js
import { signup } from '../services/api.js';

const signupForm = document.getElementById('signupForm');

/**
 * Adds an event listener to the signup form for submitting the signup information.
 * If signup is successful, displays a success message and redirects to the login page.
 * If signup fails, displays an error message.
 */
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const data = await signup(username, email, password);

        showToast('Congratulations! Your signup was successful. Please proceed to login!', true);

        // Redirect to login page
        window.location.href = 'http://127.0.0.1:8080/pages/login.html';
    } catch (error) {
        showToast('An error occurred while signing up. Please try again.', false);
    }
});
