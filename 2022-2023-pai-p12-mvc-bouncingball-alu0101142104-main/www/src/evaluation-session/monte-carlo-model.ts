/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Enrique Álvarez Mesa
 * @since 01.05.2023 
 * 
 * @description File with the MonteCarloModel class
 */

/**
 * @description Class that estimating Pi using the Monte Carlo Method
 */
class MonteCarloModel {
  constructor(
    private canvasWidth = 900,
    private canvasHeigth = 900,
    private dartsIn = 0,
    private numberPoints = 0
  ) {}

  /**
   * @description Draw a dart into the canvas
   * @param context Context of the canvas
   */
  private drawDart(context: CanvasRenderingContext2D): void {
    context.beginPath();
    const coordinateX = Math.random() * this.canvasWidth;
    const coordinateY = Math.random() * this.canvasHeigth;
    context.arc(coordinateX, coordinateY, 2, 0, 2 * Math.PI)
  }

  /**
   * @description Calculate the color of the dart
   * @param coordinateX Coordinate x of the dart
   * @param coordinateY Coordinate y of the dart
   * @returns The color of the dart
   */
  private setColor(coordinateX: number,  coordinateY: number): string {
  }
}