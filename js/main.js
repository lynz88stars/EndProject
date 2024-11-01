function checkLoginStatus() {
    let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        document.getElementById('user-info').innerHTML = `
        <a class="nav-link custom-login-link" href="#" onclick="logout()"> ${loggedInUser.name}</a>
      `;
    } else {
        document.getElementById('user-info').innerHTML = `
        <a class="nav-link custom-login-link" href="./login.html">Login</a>
      `;
    }
}

function logout() {
    localStorage.removeItem('loggedInUser');
    alert('Logged out successfully');
    window.location.href = 'index.html';
}

function login() {
    event.preventDefault();
    let email = document.getElementById('custom-login-email').value;
    let password = document.getElementById('custom-login-password').value;
    const user = {
        email: email,
        password: password
    };
    let users = JSON.parse(localStorage.getItem('users')) || [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            localStorage.setItem('loggedInUser', JSON.stringify(users[i]));
            alert('Logged in successfully');
            window.location.href = 'index.html';
            return;
        }
    }
    alert('Invalid email or password');
}

function signUp() {
    event.preventDefault();
    let name = document.getElementById('custom-signup-username').value;
    let email = document.getElementById('custom-signup-email').value;
    let password = document.getElementById('custom-signup-password').value;
    let confirmPassword = document.getElementById('custom-signup-confirm-password').value;

    if (name === '' || email === '' || password === '') {
        alert('Please fill all fields');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    const user = {
        name: name,
        email: email,
        password: password
    };
    let users = JSON.parse(localStorage.getItem('users')) || [];

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            alert('User email already exists');
            return;
        }
    }

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('User registered successfully');
    window.location.href = 'login.html';
}