// script.js

// Función para mostrar/ocultar información de Japón
function mostrarMas() {
    var contenido = document.getElementById("contenidoAdicional");
    var boton = document.getElementById("mostrarMas");

    if (contenido.style.display === "none") {
        contenido.style.display = "block";
        boton.innerHTML = "Mostrar menos";
    } else {
        contenido.style.display = "none";
        boton.innerHTML = "Más información";
    }
}

// Función para mostrar/ocultar información de Suiza
function mostrarMas1() {
    var contenido = document.getElementById("contenidoAdicional1");
    var boton = document.getElementById("mostrarMas1");

    if (contenido.style.display === "none") {
        contenido.style.display = "block";
        boton.innerHTML = "Mostrar menos";
    } else {
        contenido.style.display = "none";
        boton.innerHTML = "Más información";
    }
}
function mostrarMas2() {
    var contenido = document.getElementById("contenidoAdicional1");
    var boton = document.getElementById("mostrarMas1");

    if (contenido.style.display === "none") {
        contenido.style.display = "block";
        boton.innerHTML = "Mostrar menos";
    } else {
        contenido.style.display = "none";
        boton.innerHTML = "Más información";
    }
}

