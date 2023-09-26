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
var Mandelbrot = /** @class */ (function () {
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
    function Mandelbrot(containerElement, width, height, canvas, context, scale, offsetX, offsetY, maxIterations, threshold, area, error) {
        if (canvas === void 0) { canvas = document.createElement('CANVAS'); }
        if (context === void 0) { context = canvas.getContext('2d'); }
        if (scale === void 0) { scale = 0.003; }
        if (offsetX === void 0) { offsetX = -2.5; }
        if (offsetY === void 0) { offsetY = -1.5; }
        if (maxIterations === void 0) { maxIterations = 500; }
        if (threshold === void 0) { threshold = 2; }
        if (area === void 0) { area = 0; }
        if (error === void 0) { error = 0; }
        this.containerElement = containerElement;
        this.width = width;
        this.height = height;
        this.canvas = canvas;
        this.context = context;
        this.scale = scale;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.maxIterations = maxIterations;
        this.threshold = threshold;
        this.area = area;
        this.error = error;
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
    Mandelbrot.prototype.calculatePoint = function (coordinateX, coordinateY) {
        var realPart = 0;
        var imaginaryPart = 0;
        var iterations = 0;
        while (iterations < this.maxIterations && (realPart * realPart + imaginaryPart * imaginaryPart) < this.threshold * this.threshold) {
            var newRealPart = realPart * realPart - imaginaryPart * imaginaryPart + coordinateX;
            imaginaryPart = 2 * realPart * imaginaryPart + coordinateY;
            realPart = newRealPart;
            iterations++;
        }
        return iterations;
    };
    /**
     * @desc Returns the color for a given number of iterations
     * @param - Number of iterations
     * @returns Color
     */
    Mandelbrot.prototype.getColor = function (iterations) {
        if (iterations === this.maxIterations) {
            return '#000';
        }
        else {
            var color = iterations / this.maxIterations * 360;
            return "hsl(".concat(color, ", 100%, 50%)");
        }
    };
    /**
     * @description Draws a single point
     * @param - X coordinate
     * @param - Y coordinate
     * @param - Color
     */
    Mandelbrot.prototype.drawPoint = function (coordinateX, coordinateY, color) {
        this.context.fillStyle = color;
        this.context.fillRect(coordinateX, coordinateY, 1, 1);
    };
    /**
     * @description Draws the Mandelbrot set
     */
    Mandelbrot.prototype.draw = function () {
        for (var coordinateX = 0; coordinateX < this.width; coordinateX++) {
            var pointX = coordinateX * this.scale + this.offsetX;
            for (var coordinateY = 0; coordinateY < this.height; coordinateY++) {
                var pointY = coordinateY * this.scale + this.offsetY;
                var iterations = this.calculatePoint(pointX, pointY);
                var color = this.getColor(iterations);
                this.drawPoint(coordinateX, coordinateY, color);
            }
        }
        this.calculateArea();
        this.printAreaCanvas();
        this.printErrorCanvas();
    };
    /**
     * @description Calculates the area and the error of the Mandelbrot set
     */
    Mandelbrot.prototype.calculateArea = function () {
        var iteration = 10000;
        var pointsInside = 0;
        for (var index = 0; index < iteration; index++) {
            var coordinateX = Math.random() * 2.5 - 2.0;
            var coordinateY = Math.random() * 1.125;
            var iterations = this.calculatePoint(coordinateX, coordinateY);
            if (iterations === this.maxIterations) {
                pointsInside++;
            }
        }
        this.area = 2 * 2.5 * 1.125 * pointsInside / iteration;
        this.error = this.area / Math.sqrt(iteration);
    };
    /**
     * @description Prints the area in the canvas
     */
    Mandelbrot.prototype.printAreaCanvas = function () {
        var text = "\u00C1rea: ".concat(this.area);
        this.context.font = '38px serif';
        this.context.fillStyle = '#000';
        this.context.fillText(text, 10, 50);
    };
    /**
     * @description Prints the error in the canvas
     */
    Mandelbrot.prototype.printErrorCanvas = function () {
        var text = "Error: ".concat(this.error);
        this.context.font = '38px serif';
        this.context.fillStyle = '#000';
        this.context.fillText(text, 10, 100);
    };
    return Mandelbrot;
}());
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
 * @description  This file contains the client code for the Mandelbrot set
 */
///<reference path='mandelbrot.ts'/>
var main = function () {
    var m1 = new Mandelbrot(document.body, 1400, 900);
    m1.draw();
};
main();
