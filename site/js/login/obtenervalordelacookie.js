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

    // Función para obtener el valor de una cookie por su nombre
function getCookie(name) {
    let cookieArr = document.cookie.split(";"); // Separar las cookies
    for(let i = 0; i < cookieArr.length; i++) {
        let cookie = cookieArr[i].trim();
        // Verificar si la cookie comienza con el nombre dado
        if (cookie.indexOf(name + "=") == 0) {
            return cookie.substring((name + "=").length, cookie.length);
        }
    }
    return null; // Si no encuentra la cookie, devuelve null
}

// Cambiar el texto del botón si la cookie existe
window.onload = function() {
    let cookieValue = getCookie('registeredEmail');
    if (cookieValue) {
        document.getElementById("registerButton").textContent = cookieValue;
    }
}