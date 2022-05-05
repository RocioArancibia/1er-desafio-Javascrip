//Programa que calcule el monto final de compra con IVA

let nombre = prompt("¡Hola! Ingresa tu nombre");
let opciones = Number(prompt("Hola " + nombre + 
" a continuación selecciona alguna de las siguientes opciones"+
        " 1. Calculadora de precio final con IVA"
        +" 2. Salir"));

while (opciones !== 2)
{
  if (opciones==1)
  { 
    let precioConIva= Number(prompt("Coloca el monto de la compra"));
IVA = 1.21;
resultado = precioConIva*IVA;
alert ("El monto total con IVA es de $ "+resultado)
  }

  if (opciones!==1&&
  opciones!==2)
{
  alert("Opción incorrecta")
}
}