    // // Función para obtener el valor de una cookie
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
    // // Verificar si el usuario está registrado
    // const registeredEmail = getCookie('registeredEmail');
    // if (!registeredEmail) {
    //     // Si no está registrado, redirigir a la página de registro
    //     window.location.href = 'registro.html'; // Cambia esto por la URL de tu página de registro
    // }