// Números que decida usuario ordenados en una lista
const prompt = require("prompt-sync")();

let num = prompt("Introduzca el número límite de líneas: ")

let lista = []

for (let i = 1; i <= num; i++) {
  if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0)
    {lista.push("FizzBuzzWoof")}
    
    else if (i % 3 == 0 && i % 5 == 0)
    {lista.push("FizzBuzz")}
  
    else if (i % 3 == 0) 
    {lista.push("Fizz")}
  
    else if (i % 5 == 0)
    {lista.push("Buzz")}

    else if (i % 7 == 0)
    {lista.push("Woof")}

  else {lista.push(i)}
}

//Búsqueda en internet de cómo arreglar la lista en vertical

let pregunta = prompt("¿Desea ver la lista de forma vertical? ('Si' o 'No'): ")

if (pregunta == "Si"){
  console.log("[\n" + lista.join(",\n") + "\n]")}

  else if (pregunta == "No"){
    console.log(lista)
  }