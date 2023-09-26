/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Enrique Álvarez Mesa
 * @since 26.04.2023 
 * 
 * @description File with the CanvasView class
 */

import { GraphicObjectModel } from './graphic-object-model.js';

/**
 * @description Class that represents the canvas view
 * @class CanvasView
 */
export class View {
  /**
   * @description Constructor of the class
   * @param graphicObject 
   * @param canvas 
   * @param context 
   */
  constructor(
    private graphicObject: GraphicObjectModel[] = [],
    private readonly canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement,
    private readonly context: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D,
    private animate: boolean = true,
  ) {
    this.resizeCanvas();
    this.context.fillStyle = 'black';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /**
   * @description Draws the graphic objects in the canvas
   * @returns void
   */
  public drawGraphicObject = () => {
    if (this.animate) {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.fillStyle = 'black';
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      for (const graphicObject of this.graphicObject) {
        graphicObject.animate(this.context);
      }
      requestAnimationFrame(() => this.drawGraphicObject());
    }
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
  public addGraphicObject(graphicObject: GraphicObjectModel): void {
    this.graphicObject.push(graphicObject);
    this.drawGraphicObject();
  }

  /**
   * @description Resize canvas to the windows inner width and height
   * @returns void
   */
  public resizeCanvas(): void {
    this.canvas.width = window.innerWidth - 20;
    this.canvas.height = window.innerHeight - 200;
  }

  /**
   * @description Stops the animation
   * @returns void
   */
  public stopAnimation(): void {
    this.animate = false;
  }

  /**
   * @description Starts the animation
   * @returns void
   */
  public startAnimation(): void {
    this.animate = true;
    this.drawGraphicObject();
  }
} 