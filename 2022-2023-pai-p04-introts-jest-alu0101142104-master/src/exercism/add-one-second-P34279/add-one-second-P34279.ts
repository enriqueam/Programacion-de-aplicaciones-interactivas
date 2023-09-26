/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author       Enrique Alvarez Mesa
 * @since 25.02.2023
 * @see {@link https://jutge.org/problems/P34279}
 * 
 * Add one second
 * @description Program that adds one second to a clock time, given its hours, minutes and seconds. Input consists of three natural numbers h, m and s that represent a clock time, that is, such that h < 24, m < 60 and s < 60.
 */

/**
 * @desc Convert the array of strings with arguments to array of numbers
 * @returns {Error} If any argument is not a number or if any argument is not a natural number
 * @returns {Array}
 */
function convertArgument(arg: string): number {
  let number: number = Number(arg);
  if (Number.isNaN(number)) {
    throw new Error ('All parameters must be numbers');
  } else if (!Number.isInteger(number)) {
    throw new Error ('All parameters must be natural numbers');
  }
  return number;
}

/**
 * Check if the time is giving correctly
 * @param {number} hours
 * @param {number} minutes
 * @param {number} seconds
 */
function checkFormat(hours: number, minutes: number, seconds: number): void {
  if (hours > 24) {
    throw new Error ('Hours must be between 0 and 24');
  } else if (minutes > 60) {
    throw new Error ('Minutes must be between 0 and 60');
  } else if (seconds > 60) {
    throw new Error ('Seconds must be between 0 and 60');
  }
}

/**
 * Add a second and reset or increase the hours, minutes or seconds if necessary
 * @param {number} hours
 * @param {number} minutes
 * @param {number} seconds
 * @returns {number[]} Result of add one second
 */
function addOneSecond(hours: number, minutes: number, seconds: number): number[] {
  seconds += 1;
  if (seconds > 59) {
    seconds = 0;
    minutes += 1;
  }
  if (minutes > 59) {
    seconds = 0;
    minutes = 0;
    hours += 1;
  }
  if (hours > 23) {
    hours = 0;
  }
  return [hours, minutes, seconds];
}

/**
 * @param {Number} num
 * @return {String}
 */
function zeroPad(num: number): string {
  return num.toString().padStart(2, '0');
}

/**
 * Format the time in terms of xx:xx:xx
 * @param {number} hours
 * @param {number} minutes
 * @param {number} seconds
 * @returns {String} The formated hour
 */
function formatOutput(hours: number, minutes: number, seconds: number): string {
  let hoursOutput: string = hours.toString();
  let minutesOutput: string = minutes.toString();
  let secondsOutput: string = seconds.toString();
  if (seconds < 10) {
    secondsOutput = zeroPad(seconds);
  }
  if (minutes < 10) {
    minutesOutput = zeroPad(minutes);
  }
  if (hours < 10) {
    hoursOutput = zeroPad(hours);
  }
  return (`${hoursOutput}:${minutesOutput}:${secondsOutput}`);
}

/**
 * Entry point of the program.
 */
function main(hours?: number, minutes?: number, seconds?: number) {
  if (hours === undefined || minutes === undefined || seconds === undefined) {
    const args: string[] = process.argv.slice(2);
    hours = convertArgument(args[0]);
    minutes = convertArgument(args[1]);
    seconds = convertArgument(args[2]);
  }
  checkFormat(hours, minutes, seconds);
  let time: number[] = addOneSecond(hours, minutes, seconds);
  console.log(formatOutput(time[0], time[1], time[2]));
}

main();

module.exports = main;
