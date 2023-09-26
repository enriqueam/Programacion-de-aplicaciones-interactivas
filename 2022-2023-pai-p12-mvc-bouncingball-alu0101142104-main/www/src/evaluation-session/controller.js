/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Enrique Álvarez Mesa
 * @since 01.05.2023
 *
 * @description File with the Controller class
 */
import { View } from './view.js';
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
    constructor(view = new View()) {
        this.view = view;
    }
}
