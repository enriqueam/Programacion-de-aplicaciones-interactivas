/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author       Enrique Alvarez Mesa
 * @since 01.02.2023
 * @see {@link https://jutge.org/problems/P51352}
 * 
 * Elements
 * @description The water (A) beats the stone (P) which in turn beats the wind (V) which beats the water. Say who wins the match, or if there is a tie.
 */

'use strict';

/**
 * Array of strings with the parameters read by the command line.
 */
const ARGS = process.argv.slice(2);

/**
 * @description Check a parameters is a valid element of the game
 * @param {string} element 
 * @returns {string} If the parameters is a element valid of the game
 * @returns {Error} If the parameters is not a element valid of the game
 */
function checkArg(element) {
  if (element === 'V' || element === 'A' || element === 'P') {
    return element;
  } else {
    throw new Error ('The two parameters must be "A", "V" or "P"');
  }
}

/**
 * @description Calcule the solution of the game
 * @param {string} firstElement 
 * @param {string} secondElement 
 * @returns {string | number} The number 1 if the first item wins, the number 2 if the second item wins, or a hyphen ('-') if there is a tie
 */
function solve(firstElement, secondElement) {
  if (firstElement === secondElement) {
    return '-';
  } else if (firstElement === 'A' && secondElement === 'P') {
    return 1;
  } else if (firstElement === 'P' && secondElement === 'V') {
    return 1;
  } else if (firstElement === 'V' && secondElement === 'A') {
    return 1;
  } else {
    return 2;
  }
}

/**
 * Entry point of the program
 */
function main() {
  let firstElement = checkArg(ARGS[0]);
  let secondElement = checkArg(ARGS[1]);
  console.log(solve(firstElement, secondElement));
}

if (require.main === module) {
  main();
}