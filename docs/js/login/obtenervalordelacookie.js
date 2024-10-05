

// Función para obtener el valor de una cookie por su nombre
// Función para obtener el valor de una cookie por su nombre
// Función para obtener el valor de una cookie por su nombre
// Función para obtener el valor de una cookie por su nombre
// Función para obtener el valor de una cookie por su nombre
// Función para obtener el valor de una cookie por su nombre
// Función para obtener el valor de una cookie por su nombre
function getCookie(name) {
    let cookieArr = document.cookie.split(";"); // Separar las cookies
    for (let i = 0; i < cookieArr.length; i++) {
        let cookie = cookieArr[i].trim();
        // Verificar si la cookie comienza con el nombre dado
        if (cookie.indexOf(name + "=") == 0) {
            return cookie.substring((name + "=").length, cookie.length);
        }
    }
    return null; // Si no encuentra la cookie, devuelve null
}

// Cambiar el texto del botón si la cookie existe
// Cambiar el texto del botón si la cookie existe
// Cambiar el texto del botón si la cookie existe
// Cambiar el texto del botón si la cookie existe
// Cambiar el texto del botón si la cookie existe
// Cambiar el texto del botón si la cookie existe
window.onload = function () {
    let cookieValue = getCookie('registeredEmail');
    if (cookieValue) {
        document.getElementById("registerButton").textContent = "Usuario: " + cookieValue;
        document.getElementById("emailField").value = cookieValue;
    }
}

// Capturar el evento submit del formulario
// Capturar el evento submit del formulario
// Capturar el evento submit del formulario
// Capturar el evento submit del formulario
// Capturar el evento submit del formulario
// Capturar el evento submit del formulario
// Capturar el evento submit del formulario
// Capturar el evento submit del formulario
document.getElementById('myForm').addEventListener('submit', function (e) {
    // Prevenir el envío del formulario para verificar la cookie
    e.preventDefault();

    // Obtener el valor de la cookie 'registeredEmail'
    let cookieValue = getCookie('registeredEmail');

    // Mostrar el mensaje apropiado en el modal
    const modalMessage = document.getElementById('modalMessage');
    if (cookieValue) {
        modalMessage.innerText = 'Enviando... En breve le contacaremos a traves del correo '+ cookieValue ;

        // Mostrar el modal de envío
        document.getElementById('submitModal').style.display = 'block';
        // Mantener el modal visible durante 2 segundos
        setTimeout(() => {
            submitModal.style.display = 'none'; // Ocultar el modal
          }, 2000); // 2000 milisegundos = 2 segundos
  
        // Enviar el formulario después de un pequeño retraso
        setTimeout(() => {
            this.submit(); // Enviar el formulario
        }, 100); // Ajusta el tiempo de espera según necesites
    } else {
        console.log('Intento de envío fallido: Usuario no registrado.'); // Mensaje en consola

        modalMessage.innerText = 'Usuario no registrado';
        // Mostrar el modal si el usuario no está registrado
        document.getElementById('submitModal').style.display = 'block';
    }
});

// Cerrar el modal al hacer clic en "x"
document.getElementById('closeModal').onclick = function () {
    document.getElementById('submitModal').style.display = 'none';
};

// Cerrar el modal si el usuario hace clic fuera del modal
window.onclick = function (event) {
    if (event.target === document.getElementById('submitModal')) {
        document.getElementById('submitModal').style.display = 'none';
    }
};

