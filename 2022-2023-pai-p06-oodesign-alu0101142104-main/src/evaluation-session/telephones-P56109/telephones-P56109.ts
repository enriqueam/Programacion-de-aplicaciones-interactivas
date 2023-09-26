/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author       Enrique Álvarez Mesa
 * @since 14.03.2023
 * @see {@link https://jutge.org/problems/P56109_en/pdf}
 *
 * Telephones P56109
 * @description Program that reads a “number” of telephone that includes 
 * letters and converts it to the equivalent number that only contains numbers.
 */

/**
 * @des Check if a string can be converted to numbrer
 * @params - The string character to check
 * @returns True is a number or false otherwise
 */
export function isNumber(character: string): boolean {
  let number: number = Number(character);
  if (Number.isNaN(number)) {
    return false;
  }
  return true;
}

/**
 * @desc Traduce a string to a number based on telephone traduction.
 * @param - String to convert to number
 * @param - the guide to use to traduce 
 * @returns The traduced number
 */
export function traduceToNumber(inputNumber: string, telephoneLetters: {[key: number]: string[]}): string {
  let output = "";
  for (let index = 0; index < string.length; index++) {
    if (!isNumber(inputNumber[index]) && inputNumber[index] !== '-') {
      for (let number in telephoneLetters) {
        if (telephoneLetters[number].includes(inputNumber[index])) {
          output += number;
        }
      }
    } else {
      output += inputNumber[index];
    }
  }
  return output;
}

/**
 * Entry point of the program.
 */
export function main(number?: string) {
  if (number === undefined) {
    number = process.argv.slice(2)[0];
  }
  let telephoneLetters: {[key: number]: string[]} = {
    2: ['A','B', 'C'],
    3: ['D', 'E', 'F'],
    4: ['G', 'H', 'I'],
    5: ['J', 'K', 'L'],
    6: ['M', 'N', 'O'],
    7: ['P', 'Q', 'R', 'S'],
    8: ['T', 'U', 'V'],
    9: ['W', 'X', 'Y', 'Z'],
  }
  console.log(traduceToNumber(number, telephoneLetters));
}

if (require.main === module) {
  main();
}