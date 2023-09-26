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

///<reference path='convex-hull.ts'/>

const main = function(): void {
  const input: HTMLInputElement = document.getElementById('number') as HTMLInputElement;
  const numberPoints: number = parseInt(input.value);
  console.log(numberPoints);
  const myCovex = new ConvexHull(numberPoints);
  myCovex.drawRandomPoints();
  myCovex.QuickHull();
}

main();
