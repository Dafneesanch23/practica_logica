
// 1. User profile
// Write a program that prompts a user for their data: username, age, and a list of their favorite movies. 
//Store the information and then showcase it in the console. 
//Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.

let username;
username = prompt("Introduzca su nombre completo:");
age = prompt("¿Cuántos años tienes?");
movies = prompt("¿Cuales son tus tres películas favoritas?");

console.log(username);
console.log(age);
console.log(`La película ${movies} es una de mis favoritas`);


// 2. Highest number
// Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, 
// determine and output the highest of those numbers.

function numMayor(numeros) {
    let mayor = numeros[0];
  
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > mayor) {
        mayor = numeros[i];
      }
    }
  
    return mayor;
  }
  
  let numUser = [];
  
  for (let i = 0; i < 10; i++) {
    let datos = prompt(`Ingrese el número ${i + 1}:`);
    let numero = parseFloat(datos);
  
    if (isNaN(numero)) {
      console.log(`"${datos}" no es un número válido. Ingrese un número.`);
      i--; 
    } else {
      numUser.push(numero);
    }
  }
  
  if (numUser.length === 0) {
    console.log('No se ingresaron números válidos.');
  } else {
    let mayorNum = numMayor(numUser);
    console.log(`El número mayor es: ${mayorNum}`);
  }

// 3. Alarm
// Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

// Result example: "Time for bed after 10 seconds".

// 4. Palindrome
// Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.

// 5. Factorial
// Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.

function numEntero() {
  let numList = prompt('Ingrese un número entero diferente de 0:');
  let numero = parseInt(numList);

  if (isNaN(numero) || numero < 1) {
    console.log('Ingrese un número entero diferente de 0.');
    return numEntero(); 
  } else {
    return numero;
  }
}

let numIngre = numEntero();

console.log(`Su número es: ${numIngre}`);

// 6. Flat array
// Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...

// let multiDimension = [1, [2, 3, [4, 5, [6]]]];

