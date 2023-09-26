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
 * @description  This file contains the code for the Mandelbrot set
 */

/**
 * @desc Represents a Mandelbrot set
 */
class Mandelbrot {
  /**
   * @desc Constructor
   * @param containerElement - The HTML that will include the Mandelbrot set
   * @param width - Width of the canvas
   * @param height - Height of the canvas
   * @param canvas - Canvas element
   * @param context - Context of the canvas
   * @param scale - Scale of the Mandelbrot set
   * @param offsetX - Offset in the X axis
   * @param offsetY - Offset in the Y axis
   * @param maxIterations - Maximum number of iterations
   * @param threshold - Threshold for the Mandelbrot set
   * @returns Mandelbrot object 
   */
  constructor(
    private containerElement: HTMLElement,
    private width: number,
    private height: number,
    private canvas: HTMLCanvasElement = document.createElement('CANVAS') as HTMLCanvasElement,
    private context: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D,
    private scale: number = 0.003,
    private offsetX: number = -2.5,
    private offsetY: number = -1.5,
    private maxIterations: number = 500,
    private threshold: number = 2,
    private area: number = 0,
    private error: number = 0
  ) {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.containerElement.appendChild(this.canvas);
  }

  /**
   * @description Calculates the number of iterations for a given point
   * @param - X coordinate
   * @param - Y coordinate
   * @returns Number of iterations
   */
  private calculatePoint(coordinateX: number, coordinateY: number): number {
    let realPart = 0;
    let imaginaryPart = 0; 
    let iterations: number = 0;
    while (iterations < this.maxIterations && (realPart * realPart + imaginaryPart * imaginaryPart) < this.threshold * this.threshold) {
      const newRealPart = realPart * realPart - imaginaryPart * imaginaryPart + coordinateX;
      imaginaryPart = 2 * realPart * imaginaryPart + coordinateY;
      realPart = newRealPart;
      iterations++;
    }
    return iterations;
  }

  /**
   * @desc Returns the color for a given number of iterations
   * @param - Number of iterations
   * @returns Color
   */
  private getColor(iterations: number): string {
    if (iterations === this.maxIterations) {
      return '#000';
    } else {
      const color = iterations / this.maxIterations * 360;
      return `hsl(${color}, 100%, 50%)`;
    }
  }

  /**
   * @description Draws a single point
   * @param - X coordinate
   * @param - Y coordinate
   * @param - Color
   */
  private drawPoint(coordinateX: number, coordinateY: number, color: string) {
    this.context.fillStyle = color;
    this.context.fillRect(coordinateX, coordinateY, 1, 1);
  }

  /**
   * @description Draws the Mandelbrot set
   */
  public draw(): void {
    for (let coordinateX = 0; coordinateX < this.width; coordinateX++) {
      const pointX = coordinateX * this.scale + this.offsetX;
      for (let coordinateY = 0; coordinateY < this.height; coordinateY++) {
        const pointY = coordinateY * this.scale + this.offsetY;
        const iterations = this.calculatePoint(pointX, pointY);
        const color = this.getColor(iterations);
        this.drawPoint(coordinateX, coordinateY, color);
      }
    }
    this.calculateArea();
    this.printAreaCanvas();
    this.printErrorCanvas();
  }

  /**
   * @description Calculates the area and the error of the Mandelbrot set
   */
  private calculateArea(): void {
    const iteration = 10000;
    let pointsInside = 0;
    for (let index = 0; index < iteration; index++) {
      const coordinateX = Math.random() * 2.5 - 2.0; 
      const coordinateY = Math.random() * 1.125;
      const iterations = this.calculatePoint(coordinateX, coordinateY);
      if (iterations === this.maxIterations) {
        pointsInside++;
      }
    }
    this.area = 2 * 2.5 * 1.125 * pointsInside / iteration;
    this.error = this.area / Math.sqrt(iteration);
  }

  /**
   * @description Prints the area in the canvas
   */
  private printAreaCanvas(): void {
    const text = `Área: ${this.area}`;
    this.context.font = '38px serif';
    this.context.fillStyle = '#000';
    this.context.fillText(text, 10, 50);
  }

  /**
   * @description Prints the error in the canvas
   */
  private printErrorCanvas(): void {
    const text = `Error: ${this.error}`;
    this.context.font = '38px serif';
    this.context.fillStyle = '#000';
    this.context.fillText(text, 10, 100);
  }
}
