/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Enrique Álvarez Mesa
 * @since 20.04.2023
 * 
 * @description Client file
 */

import { CanvasView } from './canvas-view.js';
import { GraphicObject } from './graphic-object.js';
import { Ball } from './ball.js';

/**
 * @description Controls the buttons
 * @param canvas CanvasView
 * @param graphicObject GraphicObject
 */
function buttonsController(canvas: CanvasView,graphicObject: GraphicObject): void {
  const moveUp = document.getElementById('button-up') as HTMLButtonElement;
  const moveLeft = document.getElementById('button-left') as HTMLButtonElement;
  const moveRight = document.getElementById('button-rigth') as HTMLButtonElement;
  const moveDown = document.getElementById('button-down') as HTMLButtonElement;

  moveUp.addEventListener('click', () => {
    graphicObject.moveUp();
    canvas.drawGraphicObject();
  });
  moveLeft.addEventListener('click', () => {
    graphicObject.moveLeft();
    canvas.drawGraphicObject();
  });
  moveRight.addEventListener('click', () => {
    graphicObject.moveRight();
    canvas.drawGraphicObject();
  });
  moveDown.addEventListener('click', () => {
    graphicObject.moveDown();
    canvas.drawGraphicObject();
  });
}

/**
 * @description Entry point of the program
 * @returns void
 */
function main(): void {
  const canvasView = new CanvasView();
  const ball = new Ball(canvasView.getCanvasDimensions());
  canvasView.addGraphicObject(ball);
  canvasView.drawGraphicObject();
  buttonsController(canvasView, ball);
}

main();