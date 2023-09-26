/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author       Enrique Alvarez Mesa
 * @since 07.02.2023
 * @see {@link https://jutge.org/problems/P42042}
 * 
 * Classification of characters
 * @description Program that reads a letter, and that tells if it is an uppercase letter or a lowercase letter, and that also tells if it is a vowel or a consonant. Here, assume that the vowels are ‘a’, ‘e’, ‘i’, ‘o’ and ‘u’, and their corresponding uppercase letters.
 */

'use strict';

/**
 * Array of strings with the parameters read by the command line.
 */
const ARGS = process.argv.slice(2);

/**
 * @description Check if a parameter is a letter
 * @param {string} parameter Input string parameter
 * @returns {Error} If the parameter is not a letter
 */
 function checkIsLetter(parameter) {
  if (parameter.length !== 1) {
    throw new Error ('The paramter is not a letter');
  }
  if (parameter.toLowerCase() === parameter.toUpperCase()) {
    throw new Error ('The paramter is not a letter');
  }
}

/**
 * @description Check if a letter is an uppercase or not
 * @param {string} letter Input letter
 * @returns {boolean} True if the letter is an uppercase, false is not
 */
function checkIsUpperCase(letter) {
  if (letter === letter.toUpperCase()) {
    return true;
  }
  return false;
}

/**
 * @description Check if a letter is vowel or not
 * @param {string} letter Input letter
 * @returns {boolean} True if the letter is vowel, false is not
 */
 function checkIsVowel(letter) {
  letter = letter.toLowerCase();
  if (['a', 'e', 'i', 'o', 'u'].indexOf(letter) !== -1) {
    return true;
  }
  return false;
}

/**
 * Entry point of the program.
 */
function main() {
  let input = ARGS[0];
  checkIsLetter(input);
  if (checkIsUpperCase(input)) {
    console.log('uppercase');
  } else {
    console.log('lowercase');
  } 
  if (checkIsVowel(input)) {
    console.log('vowel');
  } else {
    console.log('consonant');
  }
}

if (require.main === module) {
  main();
}