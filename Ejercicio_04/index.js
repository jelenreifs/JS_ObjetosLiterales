/* 4.	Crea una página con un párrafo vacío.Al entrar en la página se le preguntará al usuario que introduzca un número.Inserta ese número en el párrafo vacío.Si el número es menor que 100, el número tendrá color verde, si el número es entre 100 y 200 tendrá color amarillo.Si el número es mayor que 200, tendrá color rojo.
 */
num = parseInt(window.prompt("Introduce un número"));

if (num < 100) {
  document.getElementById("texto").innerHTML = num;
  document.getElementById("texto").style.backgroundColor = "green";
} else if (num >= 100 && num <= 200) {
  document.getElementById("texto").innerHTML = num;
  document.getElementById("texto").style.backgroundColor = "orange";
} else {
  document.getElementById("texto").innerHTML = num;
  document.getElementById("texto").style.backgroundColor = "red";
}
