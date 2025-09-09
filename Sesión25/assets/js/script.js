// Hola Mundo
console.log('Hola mundo');

// Suma
let sumando1 = 5;
let sumando2 = 10;

console.log(sumando1);
console.log(sumando2);
console.log(sumando1 + sumando2);

let resultadoSuma = sumando1 + sumando2;
console.log(resultadoSuma);


// Resta
let minuendo = 5;
let sustraendo = 10;
let resta = minuendo - sustraendo;

console.log("resultado resta");
console.log(resta);

// Multiplicación
let factor1 =20
let factor2 = 8;
let producto = factor1 * factor2;
console.log("resultado multiplicación");
console.log(producto);

// División
let dividendo = 20;
let divisor = 4;   
let cociente = dividendo / divisor;
console.log("resultado división");
console.log(cociente);

// Operación  combinada
console.log("Operación combinada");
console.log(15 + 43 / (4+8) * 2);

/* Módulo %
Me devuelve el residuo de una división */

let móduloNum1 = 12;
let móduloNum2 = 11;
let resultadoMódulo = móduloNum1 % móduloNum2;

console.log("resultado módulo");
console.log(resultadoMódulo);

/*Potencia **
a**b -> Eleva el número 'a' a la potencia de 'b'
*/
let base = 2;
let exponente = 3;
let restultadoPotencia = base**exponente;

console.log("resultado potencia");
console.log(restultadoPotencia);

/* Operadores de comparación

Sirven para comparar dos valores siempre retornando 
un valor booleano (true o false)

>            ->Mayor que
<            ->Menor que
>=           ->Mayor o igual que    
<=           ->Menor o igual que

*/

let valor1 = 6;
let valor2 = 3;
// comparamos
let mayorQue = valor1 > valor2;
console.log(mayorQue)
console.log(valor1 < valor2);
console.log(valor1 >= valor2);
console.log(valor1 <= valor2);

/* Operadores de igualdad

==           ->Igual que (solo compara valor, no le importa el tipo)
===          ->Estrictamente igual que (compara valor y tipo)
!=           ->Distinto que (solo compara valor)
!==          ->Estrictamente distinto que (compara valor y tipo)

*/

let datoNumber = 1; //number
let datoString = '1'; //string

//igualdad
console.log(datoNumber == datoString); //true
//identidad
console.log(datoNumber === datoString); //false

//diferentes
console.log(datoNumber != datoString); //false
console.log(datoNumber !== datoString); //true

/*Operadores lógicos
Realizan operaciones lógicas entre dos valores 
booleanos.

&&  ->  (y, AND) Todas las condiciones 
deben ser true para devolver true
||  ->  (o, OR)  Solo una de las condiciones debe ser true para devolver true
!   ->  (no, NOT) Niega el valor

*/
//AND
console.log("AND");

console.log(true && true); //true
console.log(true && false); //false
console.log(false && false); //false

//OR
console.log("OR");

console.log(true || true); //true
console.log(true || false); //true
console.log(false || false); //false

//NOT
console.log("NOT");
console.log(!true); //false
console.log(!false); //true


//Strings
//van siempre entre comillas

//comillas simples
let simples = 'Strings entre comillas simples';
console.log(simples);

//comillas dobles
let dobles = "Strings entre comillas dobles";
console.log(dobles);

//comillas invertidas o backticks
/* Son las que permiten interpolar variables y expresiones y 
escribir strings en varias líneas */
let backticks = `Strings entre backticks`;      
console.log(backticks);
//interpolación de variables
let nombreCompleto = 'Asher';
let edad = 17;
let saludo = `Hola, me llamo ${nombreCompleto}, tengo ${edad} años.`;
console.log(saludo);

let frase = `Yo soy
 ${nombreCompleto}`;
console.log(frase);

//Metacaracteres -> Representan caracteres especiales
//\n -> salto de línea (lo que hace un enter en un texto)
let texto = "Hola, \nme llamo Asher.";
console.log(texto);

/* Escapar caracteres -> Sirve para que un carácter especial
sea interpretado como un carácter normal */

let miguelGrau = "Miguel Grau dijo: \"Mi patria es primero\".";
console.log(miguelGrau);

let prueba2 = 'It\'s me';
console.log(prueba2);