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
    constructor(canvas = document.getElementById("canvas"), context = canvas.getContext("2d")) {
        this.canvas = canvas;
        this.context = context;
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
    getCanvasDimensions() {
        return [this.canvas.width, this.canvas.height];
    }
    /**
     * @description Draw a square in the canvas
     */
    drawSquare() {
        this.context.strokeStyle = 'black';
        this.context.strokeRect(0, 0, this.canvas.width, this.canvas.height);
    }
    /**
     * @description Draw a cricle in the canvas
     */
    drawCircle() {
        this.context.beginPath();
        this.context.arc(this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 2, 0, 2 * Math.PI);
        this.context.stroke();
    }
}
