/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Enrique Álvarez Mesa 
 * @since 12.04.2023
 * @description Program that defines the BarChart class
 */

import { DatosPorPais } from './line-chart-client.js'

/**
 * @description Class that draw in a canvas a line chart
 */
export class LineChart {
  constructor (
    private readonly title: string,
    private readonly data: DatosPorPais = {},
    private readonly width: number = 1400,
    private readonly height: number = 800,
    private readonly containerElement: HTMLElement = document.body,
    private readonly canvas: HTMLCanvasElement = document.createElement("canvas") as HTMLCanvasElement,
    private readonly context: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D,
    private readonly margin: number = 50
  ) {
    this.containerElement.appendChild(this.canvas);
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.margin = this.width * 0.065;
  }

  /**
   * @description Returns the number of bars to draw based on the number of 
   * keys in the data object
   * @returns number of bars to draw
   */
  private numberOfLines(): number {
    return Object.keys(this.data).length;
  }

  /**
   * @description Draws the axis of the bar chart
   * @returns void
   */
   private drawAxis(): void {
    this.context.beginPath();
    this.context.moveTo(this.margin, this.margin);
    this.context.lineTo(this.margin, this.height - this.margin);
    this.context.stroke();

    this.context.beginPath();
    this.context.moveTo(this.margin, this.height - this.margin);
    this.context.lineTo(this.width - this.margin, this.height - this.margin);
    this.context.stroke();
  }

  /**
   * @description Draws the title of the bar chart
   * @returns void
   */
  private drawTitle(): void {
    this.context.fillStyle = "black";
    this.context.font = "bold 17px sans-serif";
    this.context.textAlign = "center";
    this.context.textBaseline = "top";
    this.context.fillText(this.title, this.width / 2, 10);
  }

  /**
   * @description Draws the labels of the axis X
   * @returns void
   */
  private drawAxisXLabels(): void {
    const keys = Object.keys(this.data);
    const labelWidth = (this.width - (this.margin * 2)) / this.numberOfLines();
    const labelMargin = labelWidth / 2;
  
    this.context.font = "11px Arial";
    this.context.textAlign = "center";
    this.context.textBaseline = "top";
  
    const coordinateY = this.height - this.margin + 5;
    for (let index = 0; index < keys.length; index++) {
      const label = keys[index];
      const coordinateX = this.margin + (index * labelWidth) + labelMargin;
      this.context.fillText(label, coordinateX, coordinateY);
    }
  }

  /**
   * @description Returns the maximum value of the data object
   * @returns maximum value of the data object
   */
   private maxValue(): number {
    let max = 0;
    for (const month in this.data) {
      const monthvalue = Number(this.data[month]);
      if (monthvalue > max) {
        max = monthvalue;
      }
    }
    return max;
  }

  /**
   * @description Compute a scaled value of value to fit in the axis
   * @param value value to scale
   * @returns scaled value
   */
  private scaledValue(value: number): number {
    const scaleFactor = value / this.maxValue();
    return (this.height - (this.margin * 2)) * scaleFactor;
  }

  /**
   * @description Draw a line corresponding for each country
   */
  private drawLines() {
    for (const country in this.data) {
      this.context.beginPath();
      for (const year in this.data[country]) {
        console.log(this.data[country][year]);
        this.moveTo()
      }
    }
  }

  /**
   * @description Draws the bar chart 
   * @returns void
   */
  public draw() {
    this.drawTitle();
    this.drawAxis();
    this.drawAxisXLabels();
    this.drawLines();
  }
}