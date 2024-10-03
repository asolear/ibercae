// login.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aquí puedes definir el usuario y la contraseña
    const validUsername = 'pk'; // Cambia esto por tu usuario
    const validPassword = 'cc'; // Cambia esto por tu contraseña

    if (username === validUsername && password === validPassword) {
        // Crea una cookie que expire en 1 hora
        document.cookie = "loggedIn=true; max-age=3600; path=/";
        // Redirige al usuario a la página principal
        window.location.href = '/index.html'; // Cambia esto por tu ruta
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});