/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author       Enrique Alvarez Mesa
 * @since 07.02.2023
 * @see {@link https://jutge.org/problems/P48713}
 * 
 * Primality
 * @description Program that reads a sequence of natural numbers and, for each one, tells if it is a prime number or not. Remember that a natural number is prime if and only if it is greater than 1 and it does not have any positive divisor other than 1 and itself.
 */

 'use strict';

 /**
  * Array of strings with the parameters read by the command line.
  */
 const ARGS = process.argv.slice(2);

/**
 * Convert an array of string parameter into an array of numbers
 * @returns {number}
 */
function convertToNumbers() {
  let numbers = [];
  for (let parameter of ARGS) {
    let number = Number(parameter);
    if (Number.isNaN(number)) {
      throw new Error ('All the parameters must be numbers');
    } else if (!Number.isInteger(number)) {
      throw new Error('All the parameters must be naturals numbers');
    }else {
      numbers.push(number);
    }
  }
  return numbers;
}

/**
 * @description Check if the input is correct
 * @return {Error}
 */
function checkInput(size) {
  if (size !== ARGS.length) {
    throw new Error ('The length of the input array must be the same as the first number');
  }
}

/**
 * @description Check if a number is prime
 * @param {number} number
 * @return {true | false}
 */
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let index = 2; index < number; index++) {
    if (number % index === 0) {
      return false;
    }
    return true;
  }
}
 
/**
* Entry point of the program.
*/
function main() {
  const size = Number(ARGS.shift());
  checkInput(size);
  let numbers = convertToNumbers();
  for (let number of numbers) {
    if (isPrime(number)) {
      console.log(`${number} is prime`);
    } else {
    console.log(`${number} is not prime`);
    }
  }
}
 
if (require.main === module) {
  main();
}