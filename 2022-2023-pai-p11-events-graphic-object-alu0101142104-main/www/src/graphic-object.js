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
export class GraphicObject {
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
    constructor(canvasDimension, positionX = 100, positionY = 100, canvasWidth = 0, canvasHeight = 0, size = 10, jumpSize = 20) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.size = size;
        this.jumpSize = jumpSize;
        this.canvasWidth = canvasDimension[0];
        this.canvasHeight = canvasDimension[1];
        this.positionX = canvasDimension[0] / 2;
        this.positionY = canvasDimension[1] / 2;
    }
    /**
     * @description Moves the graphic object up if is possible
     * @returns void
     */
    moveUp() {
        if (!this.isCollidingBorderUp()) {
            this.positionY -= this.jumpSize;
        }
    }
    /**
     * @description Moves the graphic object left if is possible
     * @returns void
     */
    moveLeft() {
        if (!this.isCollidingBorderLeft()) {
            this.positionX -= this.jumpSize;
        }
    }
    /**
     * @description Moves the graphic object right if is possible
     * @returns void
     */
    moveRight() {
        if (!this.isCollidingBorderRight()) {
            this.positionX += this.jumpSize;
        }
    }
    /**
     * @description Moves the graphic object down if is possible
     * @returns void
     */
    moveDown() {
        if (!this.isCollidingBorderDown()) {
            this.positionY += this.jumpSize;
        }
    }
    /**
     * @description Checks if the graphic object is colliding with the top border
     * @returns True if the graphic object is colliding with the top border, false otherwise
     */
    isCollidingBorderUp() {
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
    isCollidingBorderDown() {
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
    isCollidingBorderLeft() {
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
    isCollidingBorderRight() {
        if (this.positionX + this.size + this.jumpSize > this.canvasWidth) {
            this.positionX = this.canvasWidth - this.size;
            return true;
        }
        return false;
    }
}
