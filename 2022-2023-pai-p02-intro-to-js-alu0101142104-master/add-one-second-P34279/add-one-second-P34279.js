/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author       Enrique Alvarez Mesa
 * @since 02.02.2023
 * @see {@link https://jutge.org/problems/P34279}
 * 
 * Add one second
 * @description Program that adds one second to a clock time, given its hours, minutes and seconds. Input consists of three natural numbers h, m and s that represent a clock time, that is, such that h < 24, m < 60 and s < 60.
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
 * Check if the time is giving correctly
 * @param {Array} time 
 */
function checkFormat(time) {
  if (time[0] > 24) {
    throw new Error ('Hours must be between 0 and 24');
  } else if (time[1] > 60) {
    throw new Error ('Minutes must be between 0 and 60');
  } else if (time[2] > 60) {
    throw new Error ('Seconds must be between 0 and 60');
  }
}

/**
 * Add a second and reset or increase the hours, minutes or seconds if necessary
 * @param {Array} time 
 * @returns {Array} Result of add one second
 */
function addOneSecond(time) {
  time[2] += 1;
  if (time[2] > 59) {
    time[2] = 0;
    time[1] += 1;
  }
  if (time[1] > 59) {
    time[2] = 0;
    time[1] = 0;
    time[0] += 1;
  }
  if (time[0] > 23) {
    time[0] = 0;
  }
  return time;
}

/**
 * Format the time in terms of xx:xx:xx
 * @param {Array} time 
 * @returns {String} The formated hour
 */
function formatOutput(time) {
  let output = '';
  for (let index = 0; index < time.length - 1; index++) {
    if (time[index] < 10) {
      output += `0${time[index]}:`;
    } else {
      output += `${time[index]}:`;
    }
  }
  if (time[2] < 10) {
    output += `0${time[2]}`;
  } else {
    output += `${time[2]}`;
  }
  return output;
}

/**
 * Entry point of the program.
 */
function main() {
  let time = convertArguments();
  checkFormat(time);
  time = addOneSecond(time);
  console.log(formatOutput(time));
}

if (require.main === module) {
  main();
}