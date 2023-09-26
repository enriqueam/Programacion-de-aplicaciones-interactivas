var Line = /** @class */ (function () {
    /**
     * @description Constructor of the class Line
     * @param firstPoint - First point of the line
     * @param secondPoint - Second point of the line
     * @param canvas - Canvas where the line will be drawn
     * @param context - Context of the canvas
     */
    function Line(firstPoint, secondPoint, canvas, context) {
        if (canvas === void 0) { canvas = document.getElementById("canvas"); }
        if (context === void 0) { context = canvas.getContext("2d"); }
        this.firstPoint = firstPoint;
        this.secondPoint = secondPoint;
        this.canvas = canvas;
        this.context = context;
    }
    /**
     * @description Gets the first point of the line
     * @returns The first point of the line
     */
    Line.prototype.getFirstPoint = function () {
        return this.firstPoint;
    };
    /**
     * @description Gets the second point of the line
     * @returns The second point of the line
     */
    Line.prototype.getSecondPoint = function () {
        return this.secondPoint;
    };
    /**
     * @description Draws a line in the canvas
     */
    Line.prototype.drawLine = function () {
        var _this = this;
        requestAnimationFrame(function () {
            _this.context.beginPath();
            _this.context.moveTo(_this.firstPoint.coordinateX, _this.firstPoint.coordinateY);
            _this.context.lineTo(_this.secondPoint.coordinateX, _this.secondPoint.coordinateY);
            _this.context.strokeStyle = 'red';
            _this.context.stroke();
        });
    };
    /**
     * @description Updates the second point of the line
     * @param point - New second point of the line
     */
    Line.prototype.updateSecondPoint = function (point) {
        this.secondPoint = point;
        this.drawLine();
    };
    return Line;
}());
var ConvexHull = /** @class */ (function () {
    /**
     * @description Constructor of the class ConvexHull
     * @param canvas - Canvas where the points will be drawn
     * @param context - Context of the canvas
     * @param numberPoints - Number of points to be drawn
     * @param points - Array of points
     */
    function ConvexHull(numberPoints, canvas, context, points) {
        if (canvas === void 0) { canvas = document.getElementById("canvas"); }
        if (context === void 0) { context = canvas.getContext("2d"); }
        if (points === void 0) { points = []; }
        this.numberPoints = numberPoints;
        this.canvas = canvas;
        this.context = context;
        this.points = points;
    }
    /**
     * @description Draws random points in the canvas
     */
    ConvexHull.prototype.drawRandomPoints = function () {
        for (var count = 0; count < this.numberPoints; count++) {
            var coordinateX = Math.random() * this.canvas.width;
            var coordinateY = Math.random() * this.canvas.height;
            var point = { coordinateX: coordinateX, coordinateY: coordinateY };
            this.context.beginPath();
            this.context.fillStyle = 'green';
            this.context.arc(coordinateX, coordinateY, 3, 0, 2 * Math.PI);
            this.context.fill();
            this.points.push(point);
        }
    };
    /**
     * @description Computes the convex hull of the points
     */
    ConvexHull.prototype.QuickHull = function () {
        var extremes = this.findExtremes();
        var A = extremes[0];
        var B = extremes[1];
        var Sk = this.rightSideLine(A, B);
        var Sk2 = this.rightSideLine(B, A);
        var line = new Line(A, B);
        line.drawLine();
        this.FindHull(Sk, line);
        var line2 = new Line(B, A);
        this.FindHull(Sk2, line2);
    };
    /**
     * @description Compute
     * @param Sk - Array of points
     * @param line - Line
     */
    ConvexHull.prototype.FindHull = function (Sk, line) {
        if (Sk.length === 0) {
            return;
        }
        var farthestPoint = this.findFarthestPoint(Sk, line);
        var Sk1 = this.rightSideLine(line.getFirstPoint(), farthestPoint);
        var Sk2 = this.rightSideLine(farthestPoint, line.getSecondPoint());
        var line2 = new Line(farthestPoint, line.getSecondPoint());
        line.updateSecondPoint(farthestPoint);
        line2.drawLine();
        this.FindHull(Sk1, line);
        this.FindHull(Sk2, line2);
    };
    /**
     * @description Finds the rightmost and leftmost points
     * @returns An array with the rightmost and leftmost points
     */
    ConvexHull.prototype.findExtremes = function () {
        var rightmost = { coordinateX: 0, coordinateY: 0 };
        var leftmost = { coordinateX: this.canvas.width, coordinateY: this.canvas.height };
        for (var _i = 0, _a = this.points; _i < _a.length; _i++) {
            var point = _a[_i];
            if (point.coordinateX > rightmost.coordinateX) {
                rightmost = point;
            }
            else if (point.coordinateX < leftmost.coordinateX) {
                leftmost = point;
            }
        }
        this.points.splice(this.points.indexOf(rightmost), 1);
        this.points.splice(this.points.indexOf(leftmost), 1);
        return [leftmost, rightmost];
    };
    /**
     * @description Finds the points that are on the right side of the line
     * formed by the two points
     * @param firstPoint - First point of the line
     * @param secondPoint - Second point of the line
     * @returns An array with the points that are on the right side of the line
     */
    ConvexHull.prototype.rightSideLine = function (firstPoint, secondPoint) {
        var rightSide = [];
        for (var _i = 0, _a = this.points; _i < _a.length; _i++) {
            var point = _a[_i];
            var resultado = (secondPoint.coordinateX - firstPoint.coordinateX) * (point.coordinateY - firstPoint.coordinateY) - (secondPoint.coordinateY - firstPoint.coordinateY) * (point.coordinateX - firstPoint.coordinateX);
            if (resultado > 0) {
                rightSide.push(point);
            }
        }
        return rightSide;
    };
    /**
     * @description Finds the point that is the farthest from the line
     * @param points - Array of points
     * @param line - Line
     * @returns The point that is the farthest from the line
     */
    ConvexHull.prototype.findFarthestPoint = function (points, line) {
        var farthestPoint = { coordinateX: 0, coordinateY: 0 };
        var maxDistance = 0;
        for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
            var point = points_1[_i];
            var distance = this.distancePointLine(point, line);
            if (distance > maxDistance) {
                maxDistance = distance;
                farthestPoint = point;
            }
        }
        this.points.splice(this.points.indexOf(farthestPoint), 1);
        return farthestPoint;
    };
    /**
     * @description Computes the distance between a point and a line
     * @param point - Point
     * @param line - Line
     * @returns The distance between the point and the line
     */
    ConvexHull.prototype.distancePointLine = function (point, line) {
        var slope = (line.getSecondPoint().coordinateY - line.getFirstPoint().coordinateY) / (line.getSecondPoint().coordinateX - line.getFirstPoint().coordinateX);
        var b = line.getFirstPoint().coordinateY - slope * line.getFirstPoint().coordinateX;
        var distance = Math.abs(slope * point.coordinateX - point.coordinateY + b) / Math.sqrt(slope * slope + 1);
        return distance;
    };
    return ConvexHull;
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
///<reference path='convex-hull.ts'/>
var main = function () {
    var input = document.getElementById('number');
    var numberPoints = parseInt(input.value);
    console.log(numberPoints);
    var myCovex = new ConvexHull(numberPoints);
    myCovex.drawRandomPoints();
    myCovex.QuickHull();
};
main();
