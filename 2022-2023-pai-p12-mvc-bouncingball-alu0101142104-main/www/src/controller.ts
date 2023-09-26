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
import { GraphicObjectModel } from './graphic-object-model.js';
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
  constructor(
    private readonly view: View = new View(),
    private readonly graphicObject: GraphicObjectModel[] = [],
  ) {
    const bouncingBall = new BouncingBallModel(this.view.getCanvasDimensions());
    this.graphicObject.push(bouncingBall);
    this.view.addGraphicObject(bouncingBall);
    this.eventListeners();
  }

  /**
   * @description Adds the event listeners
   * @returns void
   */
  private eventListeners() {
    this.windowResize();
  }

  /**
   * @description Event listener for the window resize
   * @returns void
   */
  private windowResize(): void {
    window.addEventListener('resize', () => {
      this.view.resizeCanvas();
      for (const graphicObject of this.graphicObject) {
        graphicObject.resizeCanvas(this.view.getCanvasDimensions());
      }
    });
  }
}