/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Enrique Álvarez Mesa
 * @since 26.04.2023
 *
 * @description File with the Controller class
 */
import { View } from './view.js';
import { BouncingBallModel } from './bouncing-ball-model.js';
/**
 * @description Class that represents the controller
 * @class Controller
 */
export class Controller {
    /**
     * @description Constructor of the class
     * @param view Canvas view
     * @param graphicObject Graphic object to be drawn in the canvas
     */
    constructor(view = new View(), graphicObject = []) {
        this.view = view;
        this.graphicObject = graphicObject;
        const bouncingBall = new BouncingBallModel(this.view.getCanvasDimensions());
        this.graphicObject.push(bouncingBall);
        this.view.addGraphicObject(bouncingBall);
        this.eventListeners();
    }
    /**
     * @description Adds the event listeners
     * @returns void
     */
    eventListeners() {
        this.windowResize();
    }
    /**
     * @description Event listener for the window resize
     * @returns void
     */
    windowResize() {
        window.addEventListener('resize', () => {
            this.view.resizeCanvas();
            for (const graphicObject of this.graphicObject) {
                graphicObject.resizeCanvas(this.view.getCanvasDimensions());
            }
        });
    }
}
