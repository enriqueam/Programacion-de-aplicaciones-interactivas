/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Enrique Álvarez Mesa
 * @since 20.04.2023
 *
 * @description File with the CanvasView class
 */
/**
 * @description Class that represents the canvas view
 * @class CanvasView
 */
export class CanvasView {
    /**
     * @description Constructor of the class
     * @param graphicObject
     * @param canvas
     * @param context
     */
    constructor(graphicObject = [], canvas = document.getElementById("canvas"), context = canvas.getContext("2d")) {
        this.graphicObject = graphicObject;
        this.canvas = canvas;
        this.context = context;
        this.canvas.width = 800;
        this.canvas.height = 600;
        this.context.fillStyle = '#5EBBFF';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    /**
     * @description Draws the graphic objects in the canvas
     * @returns void
     */
    drawGraphicObject() {
        requestAnimationFrame(() => {
            this.context.fillStyle = '#5EBBFF';
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
            for (const graphicObject of this.graphicObject) {
                graphicObject.draw(this.context);
            }
        });
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
    }
}
