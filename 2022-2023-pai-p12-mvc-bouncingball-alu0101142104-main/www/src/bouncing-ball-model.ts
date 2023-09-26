/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Enrique Álvarez Mesa
 * @since 26.04.2023 
 * 
 * @description File with the BouncingBallModel class
 */

import { GraphicObjectModel } from "./graphic-object-model.js";

/**
 * @description Class that represents a bouncing ball
 * @class BouncingBallModel
 */
export class BouncingBallModel extends GraphicObjectModel {
  /**
   * @description Constructor of the class
   * @param canvasDimension Canvas dimensions
   * @param color Color of the ball
   */
  constructor(
    canvasDimension: number[],
    private color: string = 'green',
    ) {
    super(canvasDimension);
    this.positionX = Math.random() * (this.canvasWidth - this.size);
    this.positionY = Math.random() * (this.canvasHeight - this.size);
    this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
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