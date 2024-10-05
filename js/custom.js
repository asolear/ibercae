document.addEventListener("DOMContentLoaded", function() {
    var nav = document.querySelector(".md-header__inner .md-header-nav");  // Selecciona la barra de navegación

    if (nav) {
        var button = document.createElement("a");  // Crea un enlace tipo botón
        button.href = "https://enlace.com";  // El enlace al que debe redirigir el botón
        button.className = "md-nav__link";  // Asigna la clase para que tenga el mismo estilo que los otros enlaces
        button.textContent = "Botón";  // Texto del botón

        // Agrega el botón al final de la barra de navegación
        nav.appendChild(button);
    }
});