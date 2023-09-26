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
export class GraphicObjectModel {
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
    constructor(canvasDimension, canvasWidth = 0, canvasHeight = 0, positionX = 100, positionY = 100, size = 20, XAxisSpeed = Math.random() * 10, YAxisSpeed = Math.random() * 10) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.positionX = positionX;
        this.positionY = positionY;
        this.size = size;
        this.XAxisSpeed = XAxisSpeed;
        this.YAxisSpeed = YAxisSpeed;
        this.canvasWidth = canvasDimension[0];
        this.canvasHeight = canvasDimension[1];
        this.positionX = canvasDimension[0] / 2;
        this.positionY = canvasDimension[1] / 2;
    }
    /**
     * @description Updates the position of the circle with the speeds values
     */
    update() {
        this.positionX += this.XAxisSpeed;
        this.positionY += this.YAxisSpeed;
    }
    /**
     * @description Starts the animation of the circle
     * @param context Canvas context
     * @returns void
     */
    animate(context) {
        this.update();
        this.bounce();
        this.draw(context);
    }
    /**
     * @description Bounces the graphic object when it reaches the canvas limits
     * @returns void
     */
    bounce() {
        if (this.positionX + this.size >= this.canvasWidth || this.positionX - this.size <= 0) {
            this.XAxisSpeed = -this.XAxisSpeed;
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
    resizeCanvas(canvasDimension) {
        this.canvasWidth = canvasDimension[0];
        this.canvasHeight = canvasDimension[1];
    }
}
