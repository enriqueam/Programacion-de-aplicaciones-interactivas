var CanvasGrid = /** @class */ (function () {
    /**
     * @desc Constructor
     * @param containerElement - The HTML that will include the Mandelbrot set
     * @param width - Width of the canvas
     * @param height - Height of the canvas
     * @param canvas - Canvas element
     */
    function CanvasGrid(containerElement, width, height, canvas, context) {
        if (canvas === void 0) { canvas = document.createElement('CANVAS'); }
        if (context === void 0) { context = canvas.getContext('2d'); }
        this.containerElement = containerElement;
        this.width = width;
        this.height = height;
        this.canvas = canvas;
        this.context = context;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.containerElement.appendChild(this.canvas);
    }
    /**
     * @desc Draw a grid in the canvas
     */
    CanvasGrid.prototype.draw = function () {
        this.drawHorizontalLines();
        this.drawVerticalLines();
    };
    /**
     * @desc Draw horizontal lines in the canvas
     */
    CanvasGrid.prototype.drawHorizontalLines = function () {
        this.context.strokeStyle = 'grey';
        var counter = 0;
        for (var index = 0; index <= this.width; index += 20) {
            this.context.beginPath();
            if (counter === 3) {
                this.context.moveTo(index, 0);
                this.context.lineTo(index, this.height);
                this.context.lineWidth = 3;
                this.context.stroke();
                counter = 0;
            }
            else {
                this.context.moveTo(index, 0);
                this.context.lineTo(index, this.height);
                this.context.lineWidth = 1;
                this.context.stroke();
                counter++;
            }
        }
    };
    /**
     * @desc Draw vertical lines in the canvas
     */
    CanvasGrid.prototype.drawVerticalLines = function () {
        this.context.strokeStyle = 'grey';
        var counter = 0;
        for (var index = 0; index <= this.height; index += 20) {
            this.context.beginPath();
            if (counter === 3) {
                this.context.moveTo(0, index);
                this.context.lineTo(this.width, index);
                this.context.lineWidth = 3;
                this.context.stroke();
                counter = 0;
            }
            else {
                this.context.moveTo(0, index);
                this.context.lineTo(this.width, index);
                this.context.lineWidth = 1;
                this.context.stroke();
                counter++;
            }
            console.log(counter, this.context.lineWidth);
        }
    };
    return CanvasGrid;
}());
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author       Enrique Álvarez Mesa
 * @since 21.03.2023
 * @see {@link https://es.wikipedia.org/wiki/Conjunto_de_Mandelbrot}
 *
 * @description  This file contains the client code for the Mandelbrot set
 */
///<reference path='canvas-grid.ts'/>
var main = function () {
    var Grid = new CanvasGrid(document.body, 1580, 780);
    Grid.draw();
};
main();
