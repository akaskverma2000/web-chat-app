export async function login(username, password) {
    const response = await fetch('http://127.0.0.1:8080/auth/local', {
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
        console.error('Failed to login into the web app:', response);
        showToast('Oops! Something went wrong. Please refresh the page and try again.', false);
        return;
    }

    return await response.json();
}

export async function signup(username, email, password) {
    const response = await fetch('http://127.0.0.1:8080/auth/local/register', {
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
        const data = await response.json();
        throw new Error(data.message || 'Failed to signup');
    }

    return await response.json();
}

