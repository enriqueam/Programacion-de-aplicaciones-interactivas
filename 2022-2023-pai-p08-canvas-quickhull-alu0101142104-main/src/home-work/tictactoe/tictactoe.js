var CanvasGrid = /** @class */ (function () {
    /**
     * @desc Constructor
     * @param containerElement - The HTML that will include the Mandelbrot set
     * @param width - Width of the canvas
     * @param height - Height of the canvas
     * @param canvas - Canvas element
     */
    function CanvasGrid(size, canvas, context, lineWidth) {
        if (canvas === void 0) { canvas = document.getElementById("canvas"); }
        if (context === void 0) { context = canvas.getContext('2d'); }
        if (lineWidth === void 0) { lineWidth = 20; }
        this.size = size;
        this.canvas = canvas;
        this.context = context;
        this.lineWidth = lineWidth;
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
        var jumpSize = this.canvas.width / this.size;
        var width = jumpSize;
        this.context.strokeStyle = 'black';
        for (var index = 0; index < this.size - 1; index++) {
            this.context.beginPath();
            this.context.moveTo(width, 0);
            this.context.lineTo(width, this.canvas.height);
            this.context.lineWidth = this.lineWidth;
            this.context.stroke();
            width += jumpSize;
            console.log(jumpSize);
        }
    };
    /**
     * @desc Draw vertical lines in the canvas
     */
    CanvasGrid.prototype.drawVerticalLines = function () {
        var jumpSize = this.canvas.height / this.size;
        var height = jumpSize;
        this.context.strokeStyle = 'black';
        for (var index = 0; index < this.size - 1; index++) {
            this.context.beginPath();
            this.context.moveTo(0, height);
            this.context.lineTo(this.canvas.width, height);
            this.context.lineWidth = this.lineWidth;
            this.context.stroke();
            height += jumpSize;
        }
    };
    return CanvasGrid;
}());
var TicTacToe = /** @class */ (function () {
    function TicTacToe(scale, canvas, context) {
        if (canvas === void 0) { canvas = document.getElementById("canvas"); }
        if (context === void 0) { context = canvas.getContext("2d"); }
        this.scale = scale;
        this.canvas = canvas;
        this.context = context;
    }
    /**
     * @description Draw a symbol in the coordinates given
     * @param coordinateX - Coordiante X
     * @param coordinateY - Coordiante Y
     * @param symbol - Symbol to draw
     */
    TicTacToe.prototype.drawSymbol = function (coordinateX, coordinateY, symbol) {
        var coordinates = this.translateCoordinate(coordinateX, coordinateY);
        if (symbol === 'X') {
            this.drawX(coordinates[0], coordinates[1]);
        }
        else if (symbol === 'O') {
            this.drawO(coordinates[0], coordinates[1]);
        }
    };
    /**
     * @description Translate the coordinates to real coordiantes of the canvas
     * @param coordinateX - Coordiante X
     * @param coordinateY - Coordiante Y
     * @returns - Array with the coordiantes
     */
    TicTacToe.prototype.translateCoordinate = function (coordinateX, coordinateY) {
        var divisionWidth = this.canvas.width / (this.scale * 2);
        var divisionHeight = this.canvas.height / (this.scale * 2);
        var canvasCoordinateX = divisionWidth + divisionWidth * 2 * coordinateX;
        var canvasCoordinateY = divisionHeight + divisionHeight * 2 * coordinateY;
        return [canvasCoordinateX, canvasCoordinateY];
    };
    /**
     * @description Draw the X symbol in the canvas
     * @param coordinateX - Coordiante X
     * @param coordinateY - Coordiante Y
     */
    TicTacToe.prototype.drawX = function (coordinateX, coordinateY) {
        var scale = this.canvas.width / (this.scale * 3 + this.scale);
        this.context.beginPath();
        this.context.moveTo(coordinateX - scale, coordinateY - scale);
        this.context.lineTo(coordinateX + scale, coordinateY + scale);
        this.context.stroke();
        this.context.moveTo(coordinateX + scale, coordinateY - scale);
        this.context.lineTo(coordinateX - scale, coordinateY + scale);
        this.context.stroke();
    };
    /**
     * @description Draw the O symbol in the canvas
     * @param coordinateX - Coordiante X
     * @param coordinateY - Coordiante Y
     */
    TicTacToe.prototype.drawO = function (coordinateX, coordinateY) {
        var scale = this.canvas.width / (this.scale * 3 + this.scale);
        this.context.beginPath();
        this.context.fillStyle = 'black';
        this.context.arc(coordinateX, coordinateY, scale, 0, 2 * Math.PI);
        this.context.stroke();
    };
    return TicTacToe;
}());
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author       Enrique Álvarez Mesa
 * @since 23.03.2023
 * @see {@link https://es.wikipedia.org/wiki/Conjunto_de_Mandelbrot}
 *
 * @description  This file contains the client code for the Mandelbrot set
 */
///<reference path='canvas-grid.ts'/>
///<reference path='tictactoe.ts'/>
var main = function () {
    var size = 3;
    var Grid = new CanvasGrid(size);
    Grid.draw();
    var NewTicTacToe = new TicTacToe(size);
    NewTicTacToe.drawSymbol(0, 2, 'O');
    NewTicTacToe.drawSymbol(1, 1, 'O');
    NewTicTacToe.drawSymbol(2, 0, 'O');
    NewTicTacToe.drawSymbol(0, 1, 'X');
    NewTicTacToe.drawSymbol(2, 2, 'X');
};
main();
