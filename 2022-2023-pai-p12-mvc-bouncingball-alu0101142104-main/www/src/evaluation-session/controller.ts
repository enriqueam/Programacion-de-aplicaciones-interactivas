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
  constructor(
    private readonly view: View = new View(),
  ) {
    this.eventListeners();
  }

  private eventListeners() {
    this.pressButton();
    this.pressAnimateCheckBox();
    this.inputSpeedSlideBar();
  }

  /**
   * @description Event listener for any button
   * @returns void
   */
  private pressButton(): void {
    const resetButton = document.getElementById('reset') as HTMLButtonElement;
    resetButton.addEventListener('click', () => {});

    const addOneButton = document.getElementById('add-one') as HTMLButtonElement;
    addOneButton.addEventListener('click', () => {});
  }

  /**
   * @description Event listener for animate checkBox
   * @returns void
   */
   private pressAnimateCheckBox(): void {
    const animateCheckBox = document.getElementById('animate') as HTMLButtonElement;
    animateCheckBox.addEventListener('click', () => {});
  }

  /**
   * @description Event listener for speed slide bar
   */
  private inputSpeedSlideBar(): void {
    const speedSlideBar = document.getElementById('speed')  as HTMLButtonElement;
    speedSlideBar.addEventListener('input', () => {}); 
  }
  
}