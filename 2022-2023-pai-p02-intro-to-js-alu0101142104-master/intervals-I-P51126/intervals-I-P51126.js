/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author       Enrique Alvarez Mesa
 * @since 01.02.2023
 * @see {@link https://jutge.org/problems/P51126}
 * 
 * Intervals
 * @description  Program that, given two intervals, computes the interval corresponding to their intersection, or tells that it is empty. Input consists of four integer numbers a1, b1, a2, b2 that represent the intervals [a1, b1] and [a2, b2]. Assuming a1 ≤ b1 and a2 ≤ b2.
 */

'use strict';

/**
 * Array of strings with the parameters read by the command line.
 */
const ARGS = process.argv.slice(2);

/**
 * Convert a string parameter into a number
 * @param {string} parameters
 * @returns {number}
 */
function convertToNumber(parameters) {
  let numbers = [];
  for (let parameter of parameters) {
    let number = Number(parameter);
    if (Number.isNaN(number)) {
      throw new Error ('All the parameters must be a number');
    } else {
      numbers.push(number);
    }
  }
  return numbers;
}

/**
 * @description Given an a array with two intervals, calculate the intersection
 * @param {Array} numbers 
 * @returns {Array}
 */
function calculateInterval(numbers) {
  let solution = [];
  if (numbers[0] > numbers[1] || numbers[2] > numbers[3]) {
    return solution;
  }
  if (numbers[0] > numbers[3] || numbers[2] > numbers[1]) {
    return solution;
  }
  solution.push(Math.max(numbers[0], numbers[2]));
  solution.push(Math.min(numbers[1], numbers[3]));
  return solution;
}

/**
 * Entry point of the program.
 */
function main() {
  let numbers = convertToNumber(ARGS);
  console.log(calculateInterval(numbers));
}

if (require.main === module) {
  main();
}