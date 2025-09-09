/* let name = prompt("Ingresa tu nombre");
console.log(`Holi, buenas noches ${name}`);

let num1 = parseInt(prompt("Ingresa un numero"));
let num2 = parseInt(prompt("Ingresa otro numero"));

console.log(`${num1} + ${num2} = ${num1 + num2}`); */

//Reto 1, crea un programa que pida un número entero al usuario e indique si este número es par o impar.
let num = parseInt(prompt("Ingresa un número entero"));
if (num % 2 === 0) {
  console.log(`El número ${num} es par`);
} else {
  console.log(`El número ${num} es impar`);
}
