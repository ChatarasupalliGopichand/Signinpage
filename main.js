const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Handle Sign-Up Form Submission
document.getElementById('signUpForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('signUpName').value.trim();
    const email = document.getElementById('signUpEmail').value.trim();
    const password = document.getElementById('signUpPassword').value;

    if (!name || !email || !password) {
        alert('All fields are required for registration!');
        return;
    }

    try {
        const response = await fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });
        const result = await response.json();
        alert(result.message || 'Registered successfully!');
    } catch (error) {
        console.error('Error during sign-up:', error);
        alert('Failed to register. Please try again.');
    }
});

// Handle Sign-In Form Submission
document.getElementById('signInForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('signInEmail').value.trim();
    const password = document.getElementById('signInPassword').value;

    if (!email || !password) {
        alert('Email and Password are required for login!');
        return;
    }

    try {
        const response = await fetch('/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const result = await response.json();
        alert(result.message || 'Logged in successfully!');
    } catch (error) {
        console.error('Error during sign-in:', error);
        alert('Failed to sign in. Please try again.');
    }
});
