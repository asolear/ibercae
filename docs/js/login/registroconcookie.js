
    // Función para establecer una cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + (value || "") + ";" + expires + ";path=/";
    }

    // Función para obtener el valor de una cookie
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Mostrar el correo registrado al cargar la página
    window.onload = function() {
        const registeredEmail = getCookie('registeredEmail');
        if (registeredEmail) {
            document.getElementById('emailDisplay').innerText = `${registeredEmail}`;
            document.getElementById('registerButton').style.display = 'none'; // Ocultar el botón
        }
    };

    document.getElementById('registerButton').addEventListener('click', function() {
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('popup').style.display = 'block';
    });

    document.getElementById('closePopup').addEventListener('click', function() {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('popup').style.display = 'none';
    });

    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;

        // Establecer la cookie con el correo electrónico
        setCookie('registeredEmail', email, 1); // Guarda el correo durante 1 día

        // Mostrar mensaje de éxito
        // alert('¡Correo registrado exitosamente!');
        location.reload(); // Este método recarga la página

        // Cerrar el popup
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('popup').style.display = 'none';

        // Mostrar el correo registrado
        document.getElementById('emailDisplay').innerText = `${email}`;
        document.getElementById('registerButton').style.display = 'none'; // Ocultar el botón
    });
