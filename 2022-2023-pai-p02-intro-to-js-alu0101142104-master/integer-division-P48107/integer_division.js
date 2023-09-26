/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author       Enrique Alvarez Mesa
 * @since 01.02.2023
 * @see {@link https://jutge.org/problems/P48107_en}
 * 
 * Integer Division
 * @description The code takes two natural numbers a and b, with b > 0, and prints the integer division d and the remainder r of a divided by b.
 */

'use strict';

/**
 * Array of strings with the parameters read by the command line.
 */
const ARGS = process.argv.slice(2);

/**
 * Throw an error if the param is not a natural number.
 * @param {Number} number 
 */
function checkNaturalNumber(number) {
  if (!Number.isInteger(number)) {
    throw new Error('The dividend and divisor must be natural numbers');
  }
}

/**
 * Throw an error if the divisor is not greater than 0.
 * @param {Number} divisor 
 */
function checkDivisor(divisor) {
  if (divisor <= 0) {
    throw new Error('The divisor must be greater than 0');
  }
}

/**
 * Entry point of the program.
 */
function main() {
  let dividend = Number(ARGS[0]);
  let divisor = Number(ARGS[1]);
  checkNaturalNumber(dividend);
  checkNaturalNumber(divisor);
  let result = Math.floor(dividend / divisor);
  let remainder = dividend % divisor;
  console.log(result, remainder);
}

if (require.main === module) {
  main();
}