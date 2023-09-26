/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author       Enrique Álvarez Mesa
 * @since 14.03.2023
 * @see {@link https://jutge.org/problems/P56109_en/pdf}
 */

/**
 * @desc Class that traduce a number with letter to a number.
 */
class TraduceNumber {
  /**
   * @desc Constructor of the class
   * @param - Guide to use to traduce to number 
   */
  constructor(
    private guide: {[key: number]: string[]} = {
      2: ['A','B', 'C'],
      3: ['D', 'E', 'F'],
      4: ['G', 'H', 'I'],
      5: ['J', 'K', 'L'],
      6: ['M', 'N', 'O'],
      7: ['P', 'Q', 'R', 'S'],
      8: ['T', 'U', 'V'],
      9: ['W', 'X', 'Y', 'Z'],
    }
    ) {}

  /**
  * @des Check if a string can be converted to number
  * @params - The string character to check
  * @returns True is a number or false otherwise
  */
  private isNumber(character: string): boolean {
    let number: number = Number(character);
    if (Number.isNaN(number)) {
      return false;
    }
  return true;
}

  /**
   * @desc Traduce a string to a number based on telephone traduction.
   * @param - String to convert to number 
   * @returns The traduced number
   */
  public traduce(stringNumber: string): string {
    let output = "";
    for (let index = 0; index < stringNumber.length; index++) {
      if (!this.isNumber(stringNumber[index]) && stringNumber[index] !== '-') {
        for (let number in this.guide) {
          if (this.guide[number].includes(stringNumber[index])) {
            output += number;
          }
        }
      } else {
        output += stringNumber[index];
      }
    }
    return output;
  }
}

export {TraduceNumber};