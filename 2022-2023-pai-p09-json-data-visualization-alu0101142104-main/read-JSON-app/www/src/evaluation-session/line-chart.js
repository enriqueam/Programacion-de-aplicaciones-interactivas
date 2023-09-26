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
/**
 * @description Class that draw in a canvas a line chart
 */
export class LineChart {
    constructor(title, data = {}, width = 1400, height = 800, containerElement = document.body, canvas = document.createElement("canvas"), context = canvas.getContext("2d"), margin = 50) {
        this.title = title;
        this.data = data;
        this.width = width;
        this.height = height;
        this.containerElement = containerElement;
        this.canvas = canvas;
        this.context = context;
        this.margin = margin;
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
    numberOfLines() {
        return Object.keys(this.data).length;
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
    /**
     * @description Draws the labels of the axis X
     * @returns void
     */
    drawAxisXLabels() {
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
     * @description Draw a line corresponding for each country
     */
    drawLines() {
        for (const country in this.data) {
            this.context.beginPath();
            for (const year in this.data[country]) {
                console.log(this.data[country][year]);
            }
        }
    }
    /**
     * @description Draws the bar chart
     * @returns void
     */
    draw() {
        this.drawTitle();
        this.drawAxis();
        this.drawAxisXLabels();
        this.drawLines();
    }
}
