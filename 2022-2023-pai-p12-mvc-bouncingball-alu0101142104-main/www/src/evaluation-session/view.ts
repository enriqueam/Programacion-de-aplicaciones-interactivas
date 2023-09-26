/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Enrique Álvarez Mesa
 * @since 01.05.2023 
 * 
 * @description File with the CanvasView class
 */


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
    private readonly canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement,
    private readonly context: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D,
  ) {
    this.canvas.width = 900;
    this.canvas.height = 900;
    this.context.fillStyle = 'white';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawSquare();
    this.drawCircle();
  }

  /**
   * @description Returns the canvas dimensions
   * @returns Array with the canvas dimensions
   */
  public getCanvasDimensions(): number[] {
    return [this.canvas.width, this.canvas.height];
  }

  /**
   * @description Draw a square in the canvas
   */
  public drawSquare(): void {
    this.context.strokeStyle = 'black';
    this.context.strokeRect(0, 0, this.canvas.width, this.canvas.height); 
  }

  /**
   * @description Draw a cricle in the canvas
   */
  public drawCircle(): void {
    this.context.beginPath();
    this.context.arc(this.canvas.width / 2,this.canvas.height / 2, this.canvas.width / 2, 0, 2 * Math.PI);
    this.context.stroke();
  }
} 