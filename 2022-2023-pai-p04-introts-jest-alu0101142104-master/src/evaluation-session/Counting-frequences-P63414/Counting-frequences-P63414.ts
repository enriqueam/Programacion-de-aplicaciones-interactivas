/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author       Enrique Alvarez Mesa
 * @since 25.02.2023
 * @see {@link https://jutge.org/problems/P63414_en}
 * 
 * Counting frequences
 * @description program that reads a sequence of natural numbers and that prints, for each one, how many times it appears. Input consists of a natural number n, followed by n natural numbers between 1000000000 and 1000001000 (both included).
 */

/**
 * @desc Convert a strings into a number and check if the parameter if not a 
 * number.
 * @returns The output number or error if the argument is not a number or if 
 * any argument is not a natural number
 */
 export function convertToNumber(arg: string): number {
  let number: number = Number(arg);
  if (Number.isNaN(number)) {
    throw new Error ('All parameters must be numbers');
  } else if (!Number.isInteger(number)) {
    throw new Error ('All parameters must be natural numbers');
  }
  if (number < 1000000000 || number > 1000001000) {
    throw new Error ('The numbers must be between 1000000000 and 1000001000');
  }
  return number;
}

/**
 * @desc Check if the time is giving correctly
 * @param numberSequences A natural number who correspond to the size of the 
 * sequence
 * @param sequence Array of numbers 
 */
 export function checkFormat(numberSequences: number, sequence: number[]) {
  if (numberSequences < sequence.length) {
    console.log('Error');
    throw new Error ('The number of sequence and the sequence length are not the same');
  }
}

/**
 * @desc 
 * @param sequeceNumber 
 * @param sequence 
 * @returns 
 */
export function countSequences(sequence: number[]): object {
  let result: {[key: number]: number} = {}
  let counter: number = 0;
  for (let index = 0; index < sequence.length; index++) {
    counter = 0;
    for (let number of sequence) {
      if (sequence[index] === number) {
        counter++;
      }
    }
    result[sequence[index]] = counter;
  }
  return result;
}

/**
 * @desc Entry point of the program.
 * @param numberSequences A natural number who correspond to the size of the 
 * sequence
 * @param sequence Array of numbers 
 */
export function main(numberSequences?: number, sequence?: number[]) {
  if (numberSequences === undefined || sequence === undefined) {
    let auxSequence: number[] = []
    let args = process.argv.slice(2);
    numberSequences = Number(args.shift());
    for (let input of args) {
      auxSequence.push(convertToNumber(input))
    }
    sequence = auxSequence;
  }
  checkFormat(numberSequences, sequence);
  console.log(countSequences(sequence));
}

if (require.main === module) {
  main();
}
