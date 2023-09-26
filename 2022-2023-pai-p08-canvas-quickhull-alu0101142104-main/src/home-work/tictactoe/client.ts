/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author       Enrique Álvarez Mesa
 * @since 23.03.2023
 * @see {@link https://es.wikipedia.org/wiki/Conjunto_de_Mandelbrot}
 * 
 * @description  This file contains the client code for the Mandelbrot set
 */

///<reference path='canvas-grid.ts'/>
///<reference path='tictactoe.ts'/>

const main = function(): void {
  const size = 3;
  const Grid = new CanvasGrid(size);
  Grid.draw();
  const NewTicTacToe = new TicTacToe(size);
  NewTicTacToe.drawSymbol(0, 2, 'O');
  NewTicTacToe.drawSymbol(1, 1, 'O');
  NewTicTacToe.drawSymbol(2, 0, 'O');
  NewTicTacToe.drawSymbol(0, 1, 'X');
  NewTicTacToe.drawSymbol(2, 2, 'X');
}

main();
