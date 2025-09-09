console.log("Hola Mundo");
/* POO (Programación orientada a objetos), es un 
paradigma de programación.

Hay conceptos asociados a la POO como Clases, Objetos, etc

El concepto de objeto que vamos a aprender hoy, 
si bien tiene el mismo nombre que este concepto 
base de la programación que se aplica en muchos 
lenguajes, no es el mismo. JS lo maneja diferente.

Objeto en JS -> Son la abstracción a la programación, de 
cualquier concepto real.

Es una estructura de atos que se almacenan 
con el formato clave (atributo o propiedad) - valor.

Los valores pueden ser de cualquier tipo o estructura de datos, 
incluyendo otros objetos.

Sintaxis:

let nombreObjeto = {
    atributo1: valor1,
    atributo2: valor2,
    atributo3: valor3
};
*/
// Ejemplo de un objeto, UNA PESONA

let person = {
    name: "Asher",
    age: 16,
    cellphone: "123456789",
    hobbies: ["programar", "dibujar", "escuchar música"],
};

console.log(person);

/*
Accediendo al valor de los atributos de mi objeto, hay dos formas
1. Notación de punto: nombreObjeto.nombreAtributo
2. Notación de corchetes: nombreObjeto["nombreAtributo"]
*/
//Acceder con notaciòn de punto
console.log(person.name);
//Aceder con notaciòn de corchetes
console.log(person["age"]);
console.log(person["cellphone"]);
console.log(person.hobbies["0"]);

//Actualizar el valor de un objeto
person.cellphone = "987654321";
console.log(person.cellphone);
person.birthDate = "2008-06-02";
console.log(person);
//Hoisting -> Comportamiento por el cual las declaraciones
//de variables y funciones son movidas a la parte superior
//de su contexto antes de la ejecución del código.

//Reto 3
//Actualiza una propiedad y agrega una nueva
person.age = 20;
console.log(person.age);
person.address = "Calle Falsa";
console.log(person.address);
console.log(person);

/* 
JSON -> JavaScript Object Notation
Son un tipo de archivo que almacena información con la
misma estructura que los objetos en JS.

Estos archivos 
*/

let heroes = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }
  console.log(heroes);
  console.log(heroes.members[0].powers[1]);

  //Reto 4
  //Accede al objeto mostrar los siguientes valores:
  // damage resistance, eternal flame, inferno. uno cada 
  // uno por separado
  console.log(heroes.members[1].powers[1]);
  console.log(heroes.members[2].name);
  console.log(heroes.members[2].powers[2]);