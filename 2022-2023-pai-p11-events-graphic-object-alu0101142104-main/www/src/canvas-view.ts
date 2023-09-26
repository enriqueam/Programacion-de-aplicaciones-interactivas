/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Enrique Álvarez Mesa
 * @since 20.04.2023 
 * 
 * @description File with the CanvasView class
 */

import { GraphicObject } from './graphic-object.js';

/**
 * @description Class that represents the canvas view
 * @class CanvasView
 */
export class CanvasView {
  /**
   * @description Constructor of the class
   * @param graphicObject 
   * @param canvas 
   * @param context 
   */
  constructor(
    private graphicObject: GraphicObject[] = [],
    private readonly canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement,
    private readonly context: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D,
  ) {
    this.canvas.width = 800;
    this.canvas.height = 600;
    this.context.fillStyle = '#5EBBFF';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /**
   * @description Draws the graphic objects in the canvas
   * @returns void
   */
  public drawGraphicObject(): void {
    requestAnimationFrame(() => {
      this.context.fillStyle = '#5EBBFF';
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      for (const graphicObject of this.graphicObject) {
        graphicObject.draw(this.context);
      }
    });
  }

  /**
   * @description Returns the canvas dimensions
   * @returns Array with the canvas dimensions
   */
  public getCanvasDimensions(): number[] {
    return [this.canvas.width, this.canvas.height];
  }

  /**
   * @description Adds a graphic object to the canvas
   * @param graphicObject Graphic object to be added
   * @returns void
   */
  public addGraphicObject(graphicObject: GraphicObject): void {
    this.graphicObject.push(graphicObject);
  }
} 