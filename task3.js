// Reemplazar cada número divisible por 5 con Buzz y ambos por FizzBuzz
for (let i = 1; i <= 105; i++) {
  if (i % 3 == 0 && i % 5 == 0)
    {console.log("FizzBuzz")}

    else if (i % 3 == 0) 
  {console.log("Fizz")}
  
    else if (i % 5 == 0)
    {console.log("Buzz")}

  else {console.log(i)}
}