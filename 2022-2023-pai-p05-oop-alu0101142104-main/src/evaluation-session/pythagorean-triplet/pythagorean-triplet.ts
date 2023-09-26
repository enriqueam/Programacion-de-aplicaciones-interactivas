/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author       Enrique Álvarez Mesa
 * @since 07.03.2023
 * @see {@link https://exercism.org/tracks/typescript/exercises/pythagorean-triplet}
 */

/**
 * @desc Set of numbers, with two of optionals
 */
type Options = {
  minFactor?: number
  maxFactor?: number
  sum: number
}

/**
 * @desc Given an input integer N and optionals options, find all Pythagorean 
 * triplets for which a + b + c = N.
 * @param - A set of options for the function
 * @returns Return Pythagorean triplets that meets the condition
 */
export function triplets({minFactor, maxFactor, sum}: Options): Triplet[] {
  let min: number = minFactor !== undefined ? minFactor : 1;
  let max: number = maxFactor !== undefined ? maxFactor : sum;
  let result: Triplet[] = [];
  for (let first = min; first <= max; first++) {
    for (let second = first; second <= max; second++) {
      const third = sum - first - second;
      if (first * first + second * second === third * third && third <= max) {
        result.push(new Triplet(first, second, third));
      }
    }
  }
  return result;
}

/**
 * @desc Class that represent a triplets of numbers
 */
class Triplet {
  /**
   * @desc Constructor of the class
   * @param - First number of the triplet
   * @param - Second number of the triplet
   * @param - Third number of the triplet
   */
  constructor(private first: number, private second: number, private third: number) {}

  /**
   * @desc Transform the triplet to an array
   * @returns Array with the triplet
   */
  toArray(): [number, number, number] {
    return [this.first, this.second, this.third];
  }
}
