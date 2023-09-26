/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author       Enrique Alvarez Mesa
 * @since 01.02.2023
 * @see {@link https://jutge.org/problems/P97969}
 * 
 * Counting a's
 * @description Program that reads a sequence of characters ended with a period and prints the number of letters ‘a’ in the sequence.
 */

'use strict';

const READ_LINE_SYNC = require('../node_modules/readline-sync/');

/**
 * @description Count the number of 'a in a sentence
 * @param {string} sentence 
 * @returns {number}
 */
function countingA(sentence) {
  let count = 0;
  for (let index = 0; index < sentence.length; index++) {
    if (sentence[index] === 'a') {
      count++;
    }
  }
  return count;
}

/**
 * Entry point of the program.
 */
function main() {
  let sentence = READ_LINE_SYNC.question('Introduce a sentence: ');
  console.log(countingA(sentence));
}

if (require.main === module) {
  main();
}