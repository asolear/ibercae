    // // Obtener el correo registrado desde la cookie
    // function getCookie(name) {
    //     const nameEQ = name + "=";
    //     const ca = document.cookie.split(';');
    //     for (let i = 0; i < ca.length; i++) {
    //         let c = ca[i];
    //         while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    //         if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    //     }
    //     return null;
    // }
    // // Al cargar la página, establecer el correo registrado en el formulario

    // // Función para enviar el correo
    // function sendEmail(event) {

    //     const registeredEmail = getCookie('registeredEmail');
    //     if (registeredEmail) {
    //         document.getElementById('email').value = registeredEmail; // Establecer el correo en un campo oculto

    //         event.preventDefault(); // Evitar el comportamiento por defecto del formulario
    //         const email = document.getElementById('email').value;
    //         const message = document.getElementById('message').value;
    //         // Crear el enlace mailto
    //         const subject = "Mensaje desde el formulario";
    //         const body = `Mensaje: ${message}`;
    //         const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    //         // Abrir el cliente de correo del usuario
    //         window.location.href = mailtoLink;
    //         return false; // Evitar que el formulario se envíe de forma convencional

    //     } else {
    //         alert('No estás registrado. Por favor, regístrate primero.');
    //         window.location.href = 'registro.html'; // Redirigir a la página de registro
    //     }


    // }


    var modal = document.getElementById("miModal");

    // Obtiene el enlace que abre el modal
    var enlace = document.getElementById("abrirModal");

    // Obtiene el botón de cierre
    var span = document.getElementsByClassName("close")[0];

    // Cuando el usuario haga clic en el enlace, abre el modal
    enlace.onclick = function(event) {
        event.preventDefault(); // Evita que el enlace navegue
        modal.style.display = "block";
    }

    // Cuando el usuario haga clic en el botón de cierre (X), cierra el modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Cuando el usuario haga clic fuera del modal, lo cierra
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }