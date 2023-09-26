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
    constructor(title, data = {}, width = 800, height = 600, containerElement = document.body, canvas = document.createElement("canvas"), context = canvas.getContext("2d"), margin = 50, barWidth = 50, barMargin = 10, barColor = "blue") {
        this.title = title;
        this.data = data;
        this.width = width;
        this.height = height;
        this.containerElement = containerElement;
        this.canvas = canvas;
        this.context = context;
        this.margin = margin;
        this.barWidth = barWidth;
        this.barMargin = barMargin;
        this.barColor = barColor;
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
    numberOfBars() {
        console.log(Object.keys(this.data).length);
        return Object.keys(this.data).length;
    }
    /**
     * @description Draws the bar chart
     * @returns void
     */
    draw() {
        this.drawTitle();
        this.drawAxis();
        this.drawBar();
    }
    /**
     * @description Draws the axis of the bar chart
     * @returns void
     */
    drawAxis() {
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
    drawBar() {
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
    maxValue() {
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
    scaledValue(value) {
        const scaleFactor = value / this.maxValue();
        return (this.height - (this.margin * 2)) * scaleFactor;
    }
    /**
     * @description Draws the labels of the axis X
     * @returns void
     */
    drawAxisXLabels() {
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
    drawAxisYLabels() {
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
    drawTitle() {
        this.context.fillStyle = "black";
        this.context.font = "bold 17px sans-serif";
        this.context.textAlign = "center";
        this.context.textBaseline = "top";
        this.context.fillText(this.title, this.width / 2, 10);
    }
}
