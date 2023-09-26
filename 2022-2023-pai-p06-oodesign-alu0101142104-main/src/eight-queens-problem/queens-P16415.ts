/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author       Enrique Álvarez Mesa
 * @since 10.03.2023
 * @link https://jutge.org/problems/P16415_en, 
 * @link https://en.wikipedia.org/wiki/Eight_queens_puzzle}
 *
 * @description Program to compute the number of ways to place n queens on an n × n chessboard so that no queen threatens another queen. That is, no two queens can be located on the same row, column or diagonal.
 */

const {ChessBoard} = require('./chess-board');

/**
 * @description Converts a string to a number
 * @param - The string to convert
 * @returns The number converted or an error if the string is not a number
 */
function convertToNumbers(inputNumber: string): number {
  let number: number = Number(inputNumber);
  if (Number.isNaN(number) && !Number.isInteger(number)) {
    throw new Error('The parameter must be a natural number');
  }
  if (number <= 0) {
    throw new Error('The number must be greater than 0');
  }
  return number;
}

function queensProblem(number: number): number {
  const chessBoard = new ChessBoard(number);
  chessBoard.solveQueensProblem();
  chessBoard.printSolutions();
  return chessBoard.getNumberSolutions();
}

/**
 * @description Entry point of the program
 * @param - The size of the board
 */
function main(number?: number) {
  if (number === undefined) {
    number = convertToNumbers(process.argv.slice(2)[0]);
  }
  console.log(queensProblem(number));
}

if (require.main === module) {
  main();
}

module.exports = {main, convertToNumbers, queensProblem};