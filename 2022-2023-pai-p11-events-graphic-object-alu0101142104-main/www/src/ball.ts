/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Enrique Álvarez Mesa
 * @since 20.04.2023 
 * 
 * @description File with the Ball class
 */

import { GraphicObject } from './graphic-object.js';

/**
 * @description Class that represents a ball
 * @class Ball
 */
export class Ball extends GraphicObject {

  /**
   * @description Constructor of the class
   * @param canvasDimensions canvas dimensions
   * @param color color of the ball (default: red)
   * @returns void
   * @constructor
   * @override
   */
  constructor(
    canvasDimensions: number[],
    private readonly color = 'red'
  ) {
    super(canvasDimensions);
  }

  /**
   * @description Draws the ball in the canvas
   * @param context canvas context
   * @returns void
   */
  public draw(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.positionX, this.positionY, this.size, 0, 2 * Math.PI);
    context.fill();
  }
}