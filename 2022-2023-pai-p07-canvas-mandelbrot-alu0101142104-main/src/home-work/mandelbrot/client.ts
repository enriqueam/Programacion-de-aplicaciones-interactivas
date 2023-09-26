/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author       Enrique Álvarez Mesa
 * @since 18.03.2023
 * @see {@link https://es.wikipedia.org/wiki/Conjunto_de_Mandelbrot}
 * 
 * @description  This file contains the client code for the Mandelbrot set
 */

///<reference path='mandelbrot.ts'/>

const main = function(): void {
  const m1 = new Mandelbrot(document.body, 1400, 900);
  m1.draw();
}

main();
