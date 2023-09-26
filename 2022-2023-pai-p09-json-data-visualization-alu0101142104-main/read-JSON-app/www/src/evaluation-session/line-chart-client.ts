/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Enrique Álvarez Mesa 
 * @since 12.04.2023
 * @description Program that defines the BarChart class
 */

import { fetchData, Data } from './read-json.js';
import { LineChart } from './line-chart.js';

interface DatosPorAnio {
  [anio: string]: number;
}

export interface DatosPorPais {
  [pais: string]: DatosPorAnio;
}

/**
  * @description Extracts the data from the JSON object
  * @param data JSON object
  * @returns ProcessedObject object
  */
function extractData(data: Data): DatosPorPais {
  const datosPorPais: DatosPorPais = {};
  for (const dato of data.DATOS) {
    const { anio, nacion, total } = dato;
    if (!datosPorPais[nacion]) {
      datosPorPais[nacion] = {};
    }
    if (!datosPorPais[nacion][anio]) {
      datosPorPais[nacion][anio] = 0;
    }
    datosPorPais[nacion][anio] += parseInt(total, 10);
  }
  return datosPorPais;
}
 
 /**
  * @description Entry point of the program
  */
const main = async function () {
  const inputData = await fetchData();
  const extractedData = extractData(inputData);
  console.log(extractedData);
  const newLineChart = new LineChart('Turistas alojados en Tenerife en diversos años', extractedData)
  newLineChart.draw();
}
 
main();