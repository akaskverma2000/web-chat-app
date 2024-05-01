import { login } from '../services/api.js';

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const data = await login(username, password);

        if (data.jwt) {
            localStorage.setItem('token', data.jwt);
            showToast('Great job! You have successfully logged into the web chat app.Welcome aboard!', true);
            window.location.href = 'http://127.0.0.1:8080/pages/chat.html';
        } else {
            showToast('Oops! Login failed. Please check your username and password and try again.', false);
        }
    } catch (error) {
        showToast('Oops! It looks like we are having trouble connecting to the server. Please check your internet connection and try again', false);
    }
});
