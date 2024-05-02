/**
 * Validates the login form before submission.
 * Checks if the username and password meet the length requirements.
 * Displays a toast message if validation fails.
 * @returns {boolean} True if the form is valid and can be submitted, false otherwise.
 */
export function validateLoginForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.length < 3 || username.length > 20) {
        showToast('Username must be between 3 and 20 characters');
        return false;
    }

    if (password.length < 8 || password.length > 20) {
        showToast('Password must be between 8 and 20 characters');
        return false;
    }

    return true;
}

/**
 * Validates the signup form inputs.
 * Checks if the username, emails, and passwords match the required criteria.
 * Displays a toast message if validation fails.
 * @returns {boolean} True if the form inputs are valid, false otherwise.
 */
export function validateSignupForm() {
    const emailInput = document.getElementById('email');
    const emailConfirmInput = document.getElementById('emailConfirm');
    const passwordInput = document.getElementById('password');
    const passwordConfirmInput = document.getElementById('passwordConfirm');
    const username = document.getElementById('username').value;

    if (username.length < 3 || username.length > 20) {
        showToast('Username must be between 3 and 20 characters');
        return false;
    }

    if (emailInput.value !== emailConfirmInput.value) {
        showToast('Emails do not match', false);
        return false;

    }

    if (passwordInput.value !== passwordConfirmInput.value) {
        showToast('Passwords do not match', false);
        return false;
    }

    return true;
}
