class CanvasGrid {

  /**
   * @desc Constructor
   * @param containerElement - The HTML that will include the Mandelbrot set
   * @param width - Width of the canvas
   * @param height - Height of the canvas
   * @param canvas - Canvas element
   */
  constructor(
    private containerElement: HTMLElement,
    private width: number,
    private height: number,
    private canvas: HTMLCanvasElement = document.createElement('CANVAS') as HTMLCanvasElement,
    private context: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D
  ) {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.containerElement.appendChild(this.canvas);
  }

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
    this.context.strokeStyle = 'grey';
    let counter = 0;
    for (let index = 0; index <= this.width; index += 20) {
      this.context.beginPath();
      if (counter === 3) {
        this.context.moveTo(index, 0);
        this.context.lineTo(index, this.height);
        this.context.lineWidth = 3;
        this.context.stroke();
        counter = 0;
      } else {
        this.context.moveTo(index, 0);
        this.context.lineTo(index, this.height);
        this.context.lineWidth = 1;
        this.context.stroke();
        counter++;
      }
    }
  }

  /**
   * @desc Draw vertical lines in the canvas
   */
  private drawVerticalLines() {
    this.context.strokeStyle = 'grey';
    let counter = 0;
    for (let index = 0; index <= this.height; index += 20) {
      this.context.beginPath();
      if (counter === 3) {
        this.context.moveTo(0, index);
        this.context.lineTo(this.width, index);
        this.context.lineWidth = 3;
        this.context.stroke();
        counter = 0;
      } else {
        this.context.moveTo(0, index);  
        this.context.lineTo(this.width, index);
        this.context.lineWidth = 1;
        this.context.stroke();
        counter++;
      }
      console.log(counter, this.context.lineWidth);
    }
  }
}