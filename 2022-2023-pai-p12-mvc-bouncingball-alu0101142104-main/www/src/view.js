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
    constructor(graphicObject = [], canvas = document.getElementById("canvas"), context = canvas.getContext("2d"), animate = true) {
        this.graphicObject = graphicObject;
        this.canvas = canvas;
        this.context = context;
        this.animate = animate;
        /**
         * @description Draws the graphic objects in the canvas
         * @returns void
         */
        this.drawGraphicObject = () => {
            if (this.animate) {
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.context.fillStyle = 'black';
                this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
                for (const graphicObject of this.graphicObject) {
                    graphicObject.animate(this.context);
                }
                requestAnimationFrame(() => this.drawGraphicObject());
            }
        };
        this.resizeCanvas();
        this.context.fillStyle = 'black';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    /**
     * @description Returns the canvas dimensions
     * @returns Array with the canvas dimensions
     */
    getCanvasDimensions() {
        return [this.canvas.width, this.canvas.height];
    }
    /**
     * @description Adds a graphic object to the canvas
     * @param graphicObject Graphic object to be added
     * @returns void
     */
    addGraphicObject(graphicObject) {
        this.graphicObject.push(graphicObject);
        this.drawGraphicObject();
    }
    /**
     * @description Resize canvas to the windows inner width and height
     * @returns void
     */
    resizeCanvas() {
        this.canvas.width = window.innerWidth - 20;
        this.canvas.height = window.innerHeight - 200;
    }
    /**
     * @description Stops the animation
     * @returns void
     */
    stopAnimation() {
        this.animate = false;
    }
    /**
     * @description Starts the animation
     * @returns void
     */
    startAnimation() {
        this.animate = true;
        this.drawGraphicObject();
    }
}
