class CanvasGrid {
  /**
   * @desc Constructor
   * @param containerElement - The HTML that will include the Mandelbrot set
   * @param width - Width of the canvas
   * @param height - Height of the canvas
   * @param canvas - Canvas element
   */
  constructor(
    private size: number,
    private readonly canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement,
    private context: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D,
    private lineWidth = 20,
  ) {}

  /**
   * @desc Draw a grid in the canvas
   */
  public draw() {
    this.drawHorizontalLines();
    this.drawVerticalLines();
  }

  /**
   * @desc Draw horizontal lines in the canvas
   */ 
  private drawHorizontalLines() {
    const jumpSize = this.canvas.width / this.size;
    let width = jumpSize;
    this.context.strokeStyle = 'black';
    for (let index = 0; index < this.size - 1; index++) {
      this.context.beginPath();
      this.context.moveTo(width, 0);
      this.context.lineTo(width, this.canvas.height);
      this.context.lineWidth = this.lineWidth;
      this.context.stroke();
      width += jumpSize;
      console.log(jumpSize);
    }
  }

  /**
   * @desc Draw vertical lines in the canvas
   */
  private drawVerticalLines() {
    const jumpSize = this.canvas.height / this.size;
    let height = jumpSize;
    this.context.strokeStyle = 'black';
    for (let index = 0; index < this.size - 1; index++) {
      this.context.beginPath();
      this.context.moveTo(0, height);
      this.context.lineTo(this.canvas.width, height);
      this.context.lineWidth = this.lineWidth;
      this.context.stroke();
      height += jumpSize;
    }
  }
} 