/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author       Enrique Alvarez Mesa
 * @since 02.02.2023
 * @see {@link https://jutge.org/problems/P90615}
 * 
 * Maximum of three integer numbers
 * @description Program that reads three numbers and prints their maximum.
 */

'use strict';

/**
 * Array of strings with the parameters read by the command line.
 */
const ARGS = process.argv.slice(2);

/**
 * Convert a string parameter into a number
 * @param {string} parameter 
 * @returns {number}
 */
function convertParameter(parameter) {
  let number = Number(parameter);
  if (Number.isNaN(number)) {
    throw new Error ('All the parameters must be a number');
  }
  return number ;
}

/** 
 * @description Return the maximum number of a set of numbers
 * @param {Array} numbers 
 * @returns {number} The maximum number
 */
function maximumNumber(numbers) {
  let max = 0;
  for (let number of numbers) {
    if (number > max) {
      max = number;
    }
  }
  return max;
}

/**
 * Entry point of the program.
 */
function main() {
  let numbers = [];
  numbers.push(convertParameter(ARGS[0]));
  numbers.push(convertParameter(ARGS[1]));
  numbers.push(convertParameter(ARGS[2]));
  console.log(maximumNumber(numbers));
}

if (require.main === module) {
  main();
}