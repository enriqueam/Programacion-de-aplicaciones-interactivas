/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Enrique Álvarez Mesa 
 * @since 03.04.2023
 * @description Program that reads JSON data from URL
 */

import { fetchData, Data } from './read-json.js';
import { BarChart } from './bar-chart.js';

/**
 * @description Data type object
 * @interface DataObject
 * @property {string} [key: string] Key of the object
 * @property {string} string Value of the object
 */
export interface ProcessedObject {
  [key: string]: string;
}

/**
 * @description Extracts the data from the JSON object
 * @param data JSON object
 * @param zone Zone to extract the data from
 * @returns ProcessedObject object
 */
function extractData(data: Data, zone: string): ProcessedObject {
  let result: ProcessedObject = {};
  console.log(data.DATOS);
  for (const dato of data.DATOS) {
    if (dato.denominacion === zone) {
      result[dato.periodo] = dato.Total;
    }
  }
  return result;
}

/**
 * @description Entry point of the program
 */
const main = async function () {
  const inputData = await fetchData();
  const result = extractData(inputData, 'Tacoronte-Acentejo');
  const barChart = new BarChart('Producción vitivinícola en Tenerife en Tacoronte-Acentejo. Total (kg) por año', result);
  barChart.draw();
}

main();
