/* 3.	Crea una página con un párrafo vacío. Al entrar en la página se le preguntará al usuario que introduzca una frase. Inserta la frase en el párrafo vacío. */

frase = window.prompt("Introduce una frase");
document.querySelector(".container p").innerHTML = frase;
