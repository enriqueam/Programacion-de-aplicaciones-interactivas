/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author       Enrique Álvarez Mesa
 * @since 21.03.2023
 * @see {@link https://es.wikipedia.org/wiki/Conjunto_de_Mandelbrot}
 * 
 * @description  This file contains the client code for the Mandelbrot set
 */

///<reference path='canvas-grid.ts'/>

const main = function (): void {
  const Grid = new CanvasGrid(document.body, 1580, 780);
  Grid.draw();
}

main();