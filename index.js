//RESUELVE LOS EJERCICIOS AQUÍ

// Ex 1
//  Dado el objeto empleados, extrae la empleada Ana completa.

const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

let [, ana] = empleados;
console.log(ana);

// Ex 2
//  Dado el objeto empleados, extrae el email del empleado Luis --> Luis@gmail.com

let [{ email: emailLuis }] = empleados;
console.log(emailLuis);

// Ex 3
//  Usa destructuración para cambiar los valores de a y b;

// Inicialmente
let a = 5;
let b = 3;

[a, b] = [b, a];

// Ex 4
//  Dado el objeto HIGH_TEMPERATURES

const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow;
console.log(maximaHoy);
console.log(maximaManana);

// Ex 5
//  Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.

function sumEveryOther(...arr) {
  return arr.reduce(function (arr, curr) {
    return arr + curr;
  });
}

// Ex 6
//  Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números).
function addOnlyNums(...arr) {
  let sum = 0;
  for (const nums of arr) {
    if (typeof nums === "number") sum += nums;
  }
  return sum;
}
console.log(addOnlyNums(1, 2, 3, 4, "hola", 5, 6, 7));

// Ex 7
//  Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

function countTheArgs(...arr) {
  return arr.length;
}

// Ex 8
//  Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

function combineTwoArrays(arr, arr2) {
    return [...arr, ...arr2]
}
console.log(combineTwoArrays([1,2,3], [1,2,3,4]));

// Ex 9
//  Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

function onlyUniques(...args) {
  const result = [];

  for (let item of args) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result;
};

// Ex 10
//  Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.

function combineAllArrays(...arr) {
  return [].concat(...arr);
}

// Ex 11
//  Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

function sumAndSquare(...args) {
    let sum = 0
    for (const square of args){
        sum += square**2
    }
    return sum
}
