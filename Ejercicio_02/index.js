/* 2.	Crea un objeto con tu nombre y tu edad y muéstralo por consola.Después añade tu altura y muestra de nuevo el objeto. */

texto = "";

const persona1 = {
  nombre: "Elena",
  edad: "48"
};

persona1.altura = " 1.68";

texto = `${persona1.nombre} ,${persona1.edad}, ${persona1.altura}`;
document.getElementById("container").innerHTML = texto;
