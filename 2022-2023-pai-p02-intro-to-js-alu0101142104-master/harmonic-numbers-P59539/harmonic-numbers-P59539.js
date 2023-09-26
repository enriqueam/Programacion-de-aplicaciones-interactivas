/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author       Enrique Alvarez Mesa
 * @since 07.02.2023
 * @see {@link https://jutge.org/problems/P59539}
 * Harmonic numbers
 * @description Program that reads a number n and prints the n-th harmonic number, defined as Hn = 1/1 + 1/2 + ⋯ + 1/n.
 */

'use strict';

/**
 * Array of strings with the parameters read by the command line.
 */
const ARGS = process.argv.slice(2);

/**
 * @description Convert a string parameter into a number
 * @param {string} parameter The input string
 * @returns {number | Error} The input converted into number or error if the input is not a natural number or a number
 */
 function convertToNumber(parameter) {  
  let number = Number(parameter);
  if (Number.isNaN(number)) {
    throw new Error ('Parameter must be a number');
  } else if (!Number.isInteger(number)) {
    throw new Error('Parameter must be a natural number');
  }
  return number;
}

/**
 * @description Calculate the n-th harmonic number
 * @param {number} number Input number
 * @returns {number} The harmonic number
 */
function calculateHarmonic(number) {
  let sumatory = 0;
  for (let index = 1; index <= number; index++) {
    sumatory += 1 / index;
  }
  return sumatory.toFixed(4);
}

/**
 * Entry point of the program.
 */
function main() {
  let number = convertToNumber(ARGS[0]);
  console.log(calculateHarmonic(number));
}

if (require.main === module) {
  main();
}