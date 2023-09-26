interface Point {
  coordinateX: number;
  coordinateY: number;
}

class Line {
  /**
   * @description Constructor of the class Line
   * @param firstPoint - First point of the line
   * @param secondPoint - Second point of the line
   * @param canvas - Canvas where the line will be drawn
   * @param context - Context of the canvas
   */
  constructor(
    private firstPoint: Point,
    private secondPoint: Point,
    private readonly canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement,
    private readonly context: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D,
  ) {}

  /**
   * @description Gets the first point of the line
   * @returns The first point of the line
   */
  public getFirstPoint(): Point {
    return this.firstPoint;
  }

  /**
   * @description Gets the second point of the line
   * @returns The second point of the line
   */
  public getSecondPoint(): Point {
    return this.secondPoint;
  }
  
  /**
   * @description Draws a line in the canvas
   */
  public drawLine(): void {
    requestAnimationFrame(() => {
      this.context.beginPath();
      this.context.moveTo(this.firstPoint.coordinateX, this.firstPoint.coordinateY);
      this.context.lineTo(this.secondPoint.coordinateX, this.secondPoint.coordinateY);
      this.context.strokeStyle = 'red';
      this.context.stroke();
    });
  }

  /**
   * @description Updates the second point of the line
   * @param point - New second point of the line
   */
  public updateSecondPoint(point: Point): void {
    this.secondPoint = point;
    this.drawLine();
  }
}

class ConvexHull {
  /** 
   * @description Constructor of the class ConvexHull
   * @param canvas - Canvas where the points will be drawn
   * @param context - Context of the canvas
   * @param numberPoints - Number of points to be drawn
   * @param points - Array of points
   */
  constructor(
    private numberPoints: number,
    private readonly canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement,
    private readonly context: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D,
    private points: Point[] = [],
  ) {}

  /**
   * @description Draws random points in the canvas
   */
  public drawRandomPoints(): void {
    for (let count = 0; count < this.numberPoints; count++) {
      const coordinateX = Math.random() * this.canvas.width;
      const coordinateY = Math.random() * this.canvas.height;
      let point: Point = { coordinateX: coordinateX, coordinateY: coordinateY };
      this.context.beginPath();
      this.context.fillStyle = 'green';
      this.context.arc(coordinateX, coordinateY, 3, 0, 2 * Math.PI);
      this.context.fill();
      this.points.push(point);
    }
  }

  /**
   * @description Computes the convex hull of the points
   */
  public QuickHull(): void {
    const extremes: Point[] = this.findExtremes();
    const A: Point = extremes[0];
    const B: Point = extremes[1];
    const Sk: Point[] = this.rightSideLine(A, B);
    const Sk2: Point[] = this.rightSideLine(B, A);
    const line: Line = new Line(A, B);
    line.drawLine();
    this.FindHull(Sk, line);
    const line2: Line = new Line(B, A);
    this.FindHull(Sk2, line2);
  }

  /**
   * @description Compute
   * @param Sk - Array of points
   * @param line - Line
   */
  private FindHull(Sk: Point[], line: Line): void {
    if (Sk.length === 0) {
      return;
    }
    let farthestPoint = this.findFarthestPoint(Sk, line);
    let Sk1: Point[] = this.rightSideLine(line.getFirstPoint(), farthestPoint);
    let Sk2: Point[] = this.rightSideLine(farthestPoint, line.getSecondPoint());
    let line2: Line = new Line(farthestPoint, line.getSecondPoint());
    line.updateSecondPoint(farthestPoint);
    line2.drawLine();
    this.FindHull(Sk1, line);
    this.FindHull(Sk2, line2);
  }

  /**
   * @description Finds the rightmost and leftmost points
   * @returns An array with the rightmost and leftmost points
   */
  private findExtremes(): Point[] {
    let rightmost: Point = { coordinateX: 0, coordinateY: 0}
    let leftmost: Point = { coordinateX: this.canvas.width, coordinateY: this.canvas.height}
    for (let point of this.points) {
      if (point.coordinateX > rightmost.coordinateX) {
        rightmost = point;
      } else if (point.coordinateX < leftmost.coordinateX) {
        leftmost = point;
      }
    }
    this.points.splice(this.points.indexOf(rightmost), 1);
    this.points.splice(this.points.indexOf(leftmost), 1);
    return [leftmost, rightmost];
  }
  

  /**
   * @description Finds the points that are on the right side of the line 
   * formed by the two points
   * @param firstPoint - First point of the line
   * @param secondPoint - Second point of the line
   * @returns An array with the points that are on the right side of the line
   */
  private rightSideLine(firstPoint: Point, secondPoint: Point): Point[] {
    let rightSide: Point[] = [];
    for (let point of this.points) {
      const resultado =
        (secondPoint.coordinateX - firstPoint.coordinateX) * (point.coordinateY - firstPoint.coordinateY) - (secondPoint.coordinateY - firstPoint.coordinateY) * (point.coordinateX - firstPoint.coordinateX);
      if (resultado > 0) {
        rightSide.push(point);
      }
    }
    return rightSide;
  }

  /**
   * @description Finds the point that is the farthest from the line
   * @param points - Array of points
   * @param line - Line
   * @returns The point that is the farthest from the line
   */
  private findFarthestPoint(points: Point[], line: Line): Point {
    let farthestPoint: Point = { coordinateX: 0, coordinateY: 0 };
    let maxDistance: number = 0;
    for (let point of points) {
      let distance = this.distancePointLine(point, line);
      if (distance > maxDistance) {
        maxDistance = distance;
        farthestPoint = point;
      }
    }
    this.points.splice(this.points.indexOf(farthestPoint), 1);
    return farthestPoint;
  }

  /**
   * @description Computes the distance between a point and a line
   * @param point - Point
   * @param line - Line
   * @returns The distance between the point and the line
   */
  private distancePointLine(point: Point, line: Line): number {
    let slope = (line.getSecondPoint().coordinateY - line.getFirstPoint().coordinateY) / (line.getSecondPoint().coordinateX - line.getFirstPoint().coordinateX);
    let b = line.getFirstPoint().coordinateY - slope * line.getFirstPoint().coordinateX;
    let distance = Math.abs(slope * point.coordinateX - point.coordinateY + b) / Math.sqrt(slope * slope + 1);
    return distance;
  }
}
