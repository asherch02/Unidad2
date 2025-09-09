/* Condicionales -> Sirven para evaluar una pregunta 
y de acuerdo al resultado se realiza una u otra cosa 

Sintaxis
if (condition) {
    // código a ejecutar si la condición es verdadera
}

Por pasos:
 1. álabra reservada if
 2. Entre paréntesis va la condición a 
 evaluar
 3. Entre llaves va el código a ejecutar 
 si la condición es verdadera
 4. Dentro de ese bloque colocamos el código 
 que se ejecutará si mi respuesta es verdadera

-> Ejemplo de un programa que indica si un nombre 
es largo. Para esto se preguna si el nombre tiene 
más de 7 caracteres
*/

let nombre = 'Michelle';

//Condition

if (nombre.length > 7) {
    // código a ejecutar si la condición es verdadera
    //No olvidar cerrar las llaves
    console.log('Que nombre tan largo tienes');
}


// Actividad de clase
/*
let nombre = 'Ash';

//Condition

if (nombre.length < 5) {
    // código a ejecutar si la condición es verdadera
    //No olvidar cerrar las llaves
    console.log('Que nombre tan corto tienes');
} */

console.log('==============================');

/* if... else if... else if ... else -> Sirve para evaluar una condición

Sintaxis

 if (condition) {
 } else if (condition2) {
   código a ejecutar su la otra condición es true
 } else if (condition3) {
    código a ejecutar su la otra condición es true
 } else {
   código a ejecutar si la condición es false
 }

*/

//el 'if' es el único obligatorio
//el 'else' es opcional y siempre va al final
//el 'else if' es opcional y puede ir varias veces

nombre = "Ash";
//Completemos el ejemplo anterior
if (nombre.length > 7) {
    //código a ejecutar si la condición es true
    console.log('Que nombre tan largo tienes');
} else {
    //código a ejecutar si la condición es false
    console.log('Tu nombre no es tan largo');
}

// Crea un programa que evalúe una edad dada y responda si es o no mayur de edad
let edad = 13;
if (nombre.length <= 18) {
    console.log('Eres chibolo todavía');
} else {
    console.log('Que viejo que eres');
}

console.log('==============================');

//Compara dos números y muestra cual es el mayor 
// usando interpolación de strings
let num1 = 5;
let num2 = 5;
console.log(`Número 1: ${num1}`);
console.log(`Número 2: ${num2}`);

if (num1 > num2) {
    console.log(`El número ${num1} es mayor que ${num2}`);
}   else if (num2 > num1) {
    console.log(`El número ${num2} es mayor que ${num1}`);
} else {
    console.log("Ambos números son iguales");
}

console.log('==============================');

//ANIDACIÓN, es decir, colocar un condicional dentro de otro

if (true) {
    // código a ejecutar si la condición es verdadera
    if (true) {
        // código a ejecutar si la condición es verdadera
        console.log('Hola');
    }
}

//Verificar si una persona es mayor de edad en Perú y en USA
edad = 21;
let estaEnUSA = false;

if (edad >= 18) {
    if (estaEnUSA) {
        if (edad >= 21) {
        console.log('Eres mayor de edad en USA');
        } else {
        console.log('Eres menor de edad en USA');
        }
    } else {
        console.log('Es mayor de edad');
    }
} else {
    console.log('Eres menor de edad');
}

//Sentencia Switch -> Sirve para evaluar una expresión y
// compararla con varios casos posibles
// Sintaxis
/*
switch (expresión) {
  case valor1:
    // código a ejecutar si la expresión es igual a valor1
    break; // sirve para terminar la condición
  case valor2:
    // código a ejecutar si la expresión es igual a valor2
    break;
  ... // PUEDES PONER LOS QUE NECESITES
  default: // siempre va al final
    // código a ejecutar si la expresión no coincide con ningún caso
    // es como el 'else' en un if...else en el switch
    break;
}
*/

//Creamos un programa que muestre el nombre de un mes de acuerdo a su número

let numeroMes = 6;

switch (numeroMes) {
    //Empieza comparando los posibles valores de mi variable
    case 1:
        //Si el valor es 1, se ejecuta este código
        console.log('Enero');
        break;

    case 2:
        //Si el valor es 2, se ejecuta este código
        console.log('Febrero');
        break;

    case 3:
        //Si el valor es 3, se ejecuta este código
        console.log('Marzo');
        break;

    //PODEMOS PONER TODOS LOS QUE NECESITEMOS

    default:
        //Se ejecuta si no se encontró ningún caso
        console.log('Mes no válido');
        break;
    }

//Actividad de clase
//Mostrar el nombre de un día de la semana de acuerdo al número ingresado

let numeroDia = 6;
switch (numeroDia) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Lunes');
        break;
    case 3:
        console.log('Martes');
        break;
    case 4:
        console.log('Miércoles');
        break;
    case 5:
        console.log('Jueves');
        break;
    case 6:
        console.log('Viernes');
        break;
    case 7:
        console.log('Sábado');
        break;
    default:
        console.log('Día no válido');
        break;
}