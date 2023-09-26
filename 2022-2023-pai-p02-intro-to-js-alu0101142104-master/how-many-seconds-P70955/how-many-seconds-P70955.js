/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author       Enrique Alvarez Mesa
 * @since 02.02.2023
 * @see {@link https://jutge.org/problems/P70955}
 * 
 * How many seconds are they? 
 * @description Program that converts to seconds a given amount of years, days, hours, minutes and seconds.
 */

'use strict';

/**
 * Array of strings with the parameters read by the command line.
 */
const ARGS = process.argv.slice(2);

/**
 * Convert the array of strings with arguments to array of numbers
 * @returns {Error} If any argument is not a number or if any argument is not a natural number
 * @returns {Array}
 */
function convertArguments() {
  let time = [];
  for (let index of ARGS) {
    let number = Number(index);
    if (Number.isNaN(number)) {
      throw new Error ('All parameters must be numbers');
    } else if (!Number.isInteger(number)) {
      throw new Error ('All parameters must be natural numbers');
    } else {
      time.push(number);
    }
  }
  return time;
}

/**
 * Convert years to seconds
 * @param {number} years 
 * @returns {number}
 */
function yearsToSecond(years) {
  return years * 31536000
}

/**
 * Convert days to seconds
 * @param {number} days 
 * @returns {number}
 */
function daysToSecond(days) {
  return days * 86400;
}

/**
 * Convert hours to seconds
 * @param {number} hours 
 * @returns {number}
 */
function hoursToSecond(hours) {
  return hours * 3600;
}

/**
 * Convert minutes to seconds
 * @param {number} minutes 
 * @returns {number}
 */
function minutesToSecond(minutes) {
  return minutes * 60;
}

/**
 * Entry point of the program.
 */
function main() {
  let time = convertArguments();
  let seconds = 0;
  seconds += yearsToSecond(time[0]);
  seconds += daysToSecond(time[1]);
  seconds += hoursToSecond(time[2]);
  seconds += minutesToSecond(time[3]);
  seconds += time[4];
  console.log(seconds);
}

if (require.main === module) {
  main();
}