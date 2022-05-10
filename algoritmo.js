//Programa que calcule el monto final de compra con IVA

let nombre = prompt("¡Hola! Ingresa tu nombre");
let opciones = Number(
  prompt(
    "Hola " +
      nombre +
      " a continuación selecciona alguna de las siguientes opciones" +
      " 1. Calculadora de precio final con IVA" +
      " 2. Salir"
  )
);

//definicion de la funcion
function resultadoMultiplicacion(a, b) {
  resultado = a * b;
}

// ciclo
while (opciones !== 2) {
  if (opciones == 1) {
    let precioConIva = Number(prompt("Coloca el monto de la compra"));
    iva = 1.21;
    resultadoMultiplicacion(precioConIva, iva);
    alert("El resultado es $" + resultado);
    alert = "¡Muchas gracias por tu visita!";
  }
  if (opciones !== 1 && opciones !== 2) {
    alert("Opción incorrecta");
  }
}
