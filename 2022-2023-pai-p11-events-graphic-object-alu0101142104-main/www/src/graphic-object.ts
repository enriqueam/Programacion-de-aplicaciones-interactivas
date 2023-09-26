/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Enrique Álvarez Mesa
 * @since 20.04.2023 
 * 
 * @description File with the GraphicObject class
 */

/**
 * @description Graphic object class
 * @class GraphicObject
 */
export abstract class GraphicObject {

  /**
   * @description Constructor of the class
   * @param canvasDimension Canvas dimensions
   * @param canvasWidth Canvas width
   * @param canvasHeight Canvas height
   * @param positionX Position in the X axis
   * @param positionY Position in the Y axis
   * @param size Size of the graphic object
   * @param jumpSize Size of the jump
   */
  constructor(
    canvasDimension: number[],
    protected positionX = 100,
    protected positionY = 100,
    protected canvasWidth = 0,
    protected canvasHeight = 0,
    protected size = 10,
    protected jumpSize = 20,
  ) {
    this.canvasWidth = canvasDimension[0];
    this.canvasHeight = canvasDimension[1];
    this.positionX = canvasDimension[0] / 2;
    this.positionY = canvasDimension[1] / 2;
  }
  
  /**
   * @description Moves the graphic object up if is possible
   * @returns void
   */
  public moveUp(): void {
    if (!this.isCollidingBorderUp()) {
      this.positionY -= this.jumpSize;
    }
  }

  /**
   * @description Moves the graphic object left if is possible
   * @returns void
   */
  public moveLeft(): void {
    if (!this.isCollidingBorderLeft()) {
      this.positionX -= this.jumpSize;
    }
  }

  /**
   * @description Moves the graphic object right if is possible
   * @returns void
   */
  public moveRight(): void {
    if (!this.isCollidingBorderRight()) {
      this.positionX += this.jumpSize;
    }
  }

  /**
   * @description Moves the graphic object down if is possible
   * @returns void
   */
  public moveDown(): void {
    if (!this.isCollidingBorderDown()) {
      this.positionY += this.jumpSize;
    }
  }

  /**
   * @description Checks if the graphic object is colliding with the top border
   * @returns True if the graphic object is colliding with the top border, false otherwise
   */
  public isCollidingBorderUp(): boolean {
    if (this.positionY - this.size - this.jumpSize < 0) {
      this.positionY = this.size;
      return true;
    }
    return false;
  }

  /**
   * @description Checks if the graphic object is colliding with the bottom border
   * @returns True if the graphic object is colliding with the bottom border, false otherwise
   */
  public isCollidingBorderDown(): boolean {
    if (this.positionY + this.size + this.jumpSize > this.canvasHeight) {
      this.positionY = this.canvasHeight - this.size;
      return true;
    }
    return false;
  }

  /**
   * @description Checks if the graphic object is colliding with the left border
   * @returns True if the graphic object is colliding with the left border, false otherwise
   */
  public isCollidingBorderLeft(): boolean {
    if (this.positionX - this.size - this.jumpSize < 0) {
      this.positionX = this.size;
      return true;
    }
    return false;
  }

  /**
   * @description Checks if the graphic object is colliding with the right border
   * @returns True if the graphic object is colliding with the right border, false otherwise
   */
  public isCollidingBorderRight(): boolean {
    if (this.positionX + this.size + this.jumpSize > this.canvasWidth) {
      this.positionX = this.canvasWidth - this.size;
      return true;
    }
    return false;
  }

  /**
   * @description Draws the graphic object in the canvas
   * @param context Canvas context
   * @returns void
   * @abstract
   */
  abstract draw(context: CanvasRenderingContext2D): void;
} 