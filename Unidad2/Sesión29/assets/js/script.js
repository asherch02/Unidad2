let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

console.log()
console.log(`El tamaño del array es ${numbers.length}`);
console.log(`El primer elemento del arreglo ${numbers[0]}`);
console.log(`ùltimo elemento del arreglo ${numbers[numbers.lenght - 1]}`);

//Reto 1
//Crea un arreglo que almacene nombres de frutas, mínimo 4 elementos y añade un lenght
let fruits = ['manzana', 'pera', 'uva', 'sandía'];
console.log(fruits)

let num1 = 18;
num1 = num1 + 1
console.log(num1);

num1 += 1
console.log(num1);

num1 += 5;
console.log(num1);
/*
console.log("EMPIEZA EL BUCLE");

for (let i =1; i <= 10; i++) {
    console.log(`Valor de i = ${i}`);
} */

//reto 3
//muestra los números del 0 al 26, de 3 en 3
console.log("números del 0 al 26 de 3 en 3");
for (let i = 0; i <= 26; i += 3) {
    console.log(i);
}

for (let i = 10; i >= -10; i -=2) {
    console.log(i);
}

//Reto: Mostrar los números del 15 al 75, de 5 en 5 con bucle while.
console.log("números del 15 al 75 de 5 en 5");
let iterator = 15;
while (iterator <= 75) {
    console.log(iterator);
    iterator += 5;
    
}
