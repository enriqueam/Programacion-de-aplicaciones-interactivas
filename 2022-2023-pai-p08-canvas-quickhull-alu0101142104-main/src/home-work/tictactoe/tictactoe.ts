class TicTacToe {
  constructor(
    private scale: number,
    private readonly canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement,
    private readonly context: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D,
  ){}

  /**
   * @description Draw a symbol in the coordinates given
   * @param coordinateX - Coordiante X
   * @param coordinateY - Coordiante Y
   * @param symbol - Symbol to draw
   */
  public drawSymbol(coordinateX: number, coordinateY:number, symbol: string): void {
    let coordinates = this.translateCoordinate(coordinateX, coordinateY);
    if (symbol === 'X') {
      this.drawX(coordinates[0], coordinates[1]);
    } else if (symbol === 'O') {
      this.drawO(coordinates[0], coordinates[1]);
    }
  }

  /**
   * @description Translate the coordinates to real coordiantes of the canvas
   * @param coordinateX - Coordiante X
   * @param coordinateY - Coordiante Y
   * @returns - Array with the coordiantes
   */
  private translateCoordinate(coordinateX: number, coordinateY:number): number[] {
    const divisionWidth = this.canvas.width / (this.scale * 2);
    const divisionHeight = this.canvas.height / (this.scale * 2);
    let canvasCoordinateX = divisionWidth + divisionWidth * 2 * coordinateX;
    let canvasCoordinateY = divisionHeight + divisionHeight * 2 * coordinateY;
    return [canvasCoordinateX, canvasCoordinateY]
  }

  /**
   * @description Draw the X symbol in the canvas
   * @param coordinateX - Coordiante X
   * @param coordinateY - Coordiante Y
   */
  private drawX(coordinateX: number, coordinateY:number) {
    const scale = this.canvas.width / (this.scale * 3 + this.scale);
    this.context.beginPath();

    this.context.moveTo(coordinateX - scale, coordinateY - scale);
    this.context.lineTo(coordinateX + scale, coordinateY + scale);
    this.context.stroke();

    this.context.moveTo(coordinateX + scale, coordinateY - scale);
    this.context.lineTo(coordinateX - scale, coordinateY + scale);
    this.context.stroke();
  }

  /**
   * @description Draw the O symbol in the canvas
   * @param coordinateX - Coordiante X
   * @param coordinateY - Coordiante Y
   */
  private drawO(coordinateX: number, coordinateY:number) {
    const scale = this.canvas.width / (this.scale * 3 + this.scale);
    this.context.beginPath();
    this.context.fillStyle = 'black';
    this.context.arc(coordinateX, coordinateY, scale, 0, 2 * Math.PI);  
    this.context.stroke();
  }
}