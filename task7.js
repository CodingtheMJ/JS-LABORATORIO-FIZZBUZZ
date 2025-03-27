// Que los números primos impares en la lista sean reemplazados por Wolfgang
const prompt = require("prompt-sync")();

let num = prompt("Introduzca el número límite de líneas: ");

let lista = [];

function esPrimoImpar(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0)
      return false
  }
  return num % 2 !== 0
}

for (let i = 1; i <= num; i++) {
  if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
    lista.push("FizzBuzzWoof");
  } else if (i % 3 == 0 && i % 5 == 0) {
    lista.push("FizzBuzz");
  } else if (i % 3 == 0) {
    lista.push("Fizz");
  } else if (i % 5 == 0) {
    lista.push("Buzz");
  } else if (i % 7 == 0) {
    lista.push("Woof");
  } else if (esPrimoImpar(i)) {
    lista.push("Wolfgang")
  } else {
    lista.push(i)
  }
}

console.log(lista)