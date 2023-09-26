/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Enrique Álvarez Mesa 
 * @since 03.04.2023
 * @description Program that defines the BarChart class
 */

import { ProcessedObject } from './bar-chart-client.js';

/**
 * @description Class BarChart, which draws a bar chart in a canvas
 */
export class BarChart {
  /**
   * @description Constructor of the BarChart class
   * @param data 
   * @param width Height of the canvas
   * @param height Width of the canvas
   * @param containerElement Container element of the canvas
   * @param canvas Canvas element
   * @param context Context of the canvas
   * @param margin Margin between the canvas and the axis
   * @param barWidth Width of the bars, based on the number of bars and ocuping 80% of the diagram space
   * @param barMargin Margin between the bars, based on the number of bars and and ocuping 20% of the diagram space
   * @param barColor Color of the bars
   */
  constructor(
    private readonly title: string,
    private readonly data: ProcessedObject = {},
    private readonly width: number = 800,
    private readonly height: number = 600,
    private readonly containerElement: HTMLElement = document.body,
    private readonly canvas: HTMLCanvasElement = document.createElement("canvas") as HTMLCanvasElement,
    private readonly context: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D,
    private readonly margin: number = 50,
    private readonly barWidth: number = 50,
    private readonly barMargin: number = 10,
    private readonly barColor: string = "blue",
  ) {
    this.containerElement.appendChild(this.canvas);
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.margin = this.width * 0.065;
    const widthEffectiveArea = this.width - (this.margin * 2);
    this.barMargin = widthEffectiveArea / this.numberOfBars() * 0.2;
    this.barWidth = widthEffectiveArea / this.numberOfBars() * 0.8;
    console.log(this.data);
  }

  /**
   * @description Returns the number of bars to draw based on the number of 
   * keys in the data object
   * @returns number of bars to draw
   */
  private numberOfBars(): number {
    console.log(Object.keys(this.data).length);
    return Object.keys(this.data).length;
  }

  /**
   * @description Draws the bar chart
   * @returns void
   */
  public draw() {
    this.drawTitle();
    this.drawAxis();
    this.drawBar();
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

    this.drawAxisXLabels();
    this.drawAxisYLabels(); 
  }
  
  /**
   * @description Draws the bars of the bar chart
   */
  private drawBar(): void {
    let positionBar = this.margin + this.barMargin;
    for (const month in this.data) {
      const monthvalue = Number(this.data[month]);
      this.context.fillStyle = this.barColor;
      this.context.fillRect(positionBar, this.height - this.margin, this.barWidth, -this.scaledValue(monthvalue));
      positionBar += this.barMargin + this.barWidth;
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
   * @description Draws the labels of the axis X
   * @returns void
   */
  private drawAxisXLabels(): void {
    const keys = Object.keys(this.data);
    const barWidth = (this.width - (this.margin * 2)) / this.numberOfBars();
    const labelMargin = barWidth / 2;
  
    this.context.font = "11px Arial";
    this.context.textAlign = "center";
    this.context.textBaseline = "top";
  
    const coordinateY = this.height - this.margin + 5;
    for (let index = 0; index < keys.length; index++) {
      const label = keys[index];
      const coordinateX = this.margin + (index * barWidth) + labelMargin;
      this.context.fillText(label, coordinateX, coordinateY);
    }
  }

  /**
   * @description Draws the labels of the axis Y
   * @returns void
   */
  private drawAxisYLabels(): void {
    const numIntervals = 5; // number of intervals in the axis
    const maxVal = this.maxValue(); // maximum value in data object
    this.context.fillStyle = "black";
    this.context.font = "bold 11px Arial";
    for (let index = 0; index <= numIntervals; index++) {
      const val = Math.round((maxVal / numIntervals) * index);
      const coordinateY = this.height - this.margin - (index * ((this.height - (2 * this.margin)) / numIntervals));
      this.context.fillText(val.toString(), this.margin - 30, coordinateY + 4);
      
      this.context.beginPath();
      this.context.moveTo(this.margin - 5, coordinateY);
      this.context.lineTo(this.margin, coordinateY);
      this.context.stroke();
    }
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
}