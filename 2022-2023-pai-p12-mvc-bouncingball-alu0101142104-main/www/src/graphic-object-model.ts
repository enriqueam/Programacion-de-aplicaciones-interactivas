/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Enrique Álvarez Mesa
 * @since 26.04.2023 
 * 
 * @description File with the GraphicObject class
 */

/**
 * @description Graphic object class
 * @class GraphicObject
 */
export abstract class GraphicObjectModel {

  /**
   * @description Constructor of the class
   * @param canvasDimension Canvas dimensions
   * @param canvasWidth Canvas width
   * @param canvasHeight Canvas height
   * @param positionX Position in the X axis
   * @param positionY Position in the Y axis
   * @param size Size of the graphic object
   * @param XAxisSpeed Speed in the X axis
   * @param YAxisSpeed Speed in the Y axis
   */
  constructor(
    canvasDimension: number[],
    protected canvasWidth = 0,
    protected canvasHeight = 0,
    protected positionX = 100,
    protected positionY = 100,
    protected size = 20,
    private XAxisSpeed = Math.random() *  10,
    private YAxisSpeed = Math.random() * 10
  ) {
    this.canvasWidth = canvasDimension[0];
    this.canvasHeight = canvasDimension[1];
    this.positionX = canvasDimension[0] / 2;
    this.positionY = canvasDimension[1] / 2;
  }

  /**
   * @description Draws the graphic object in the canvas
   * @param context Canvas context
   * @returns void
   * @abstract
   */
  abstract draw(context: CanvasRenderingContext2D): void;

  /**
   * @description Updates the position of the circle with the speeds values
   */
  private update(): void {
    this.positionX += this.XAxisSpeed;
    this.positionY += this.YAxisSpeed;
  }

  /**
   * @description Starts the animation of the circle
   * @param context Canvas context
   * @returns void
   */
  public animate(context: CanvasRenderingContext2D): void {
    this.update();
    this.bounce();
    this.draw(context);
  }

  /**
   * @description Bounces the graphic object when it reaches the canvas limits
   * @returns void
   */
  private bounce() {
    if (this.positionX + this.size >= this.canvasWidth || this.positionX - this.size <= 0) {
      this.XAxisSpeed = -this.XAxisSpeed
    }
    if (this.positionY + this.size >= this.canvasHeight || this.positionY - this.size <= 0) {
      this.YAxisSpeed = -this.YAxisSpeed;
    }
  }

  /**
   * @description Resizes the canvas
   * @param canvasDimension Canvas dimensions
   * @returns void
   */
  public resizeCanvas(canvasDimension: number[]) {
    this.canvasWidth = canvasDimension[0];
    this.canvasHeight = canvasDimension[1];
  }
} 