// Permitir que el usuario decida el límite de líneas
const prompt = require("prompt-sync")();

let num = prompt("Introduzca el número límite de líneas: ")


for (let i = 1; i <= num; i++) {
  if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0)
    {console.log("FizzBuzzWoof")}
    
    else if (i % 3 == 0 && i % 5 == 0)
    {console.log("FizzBuzz")}
  
    else if (i % 3 == 0) 
  {console.log("Fizz")}
  
    else if (i % 5 == 0)
    {console.log("Buzz")}

    else if (i % 7 == 0)
    {console.log("Woof")}

  else {console.log(i)}
}