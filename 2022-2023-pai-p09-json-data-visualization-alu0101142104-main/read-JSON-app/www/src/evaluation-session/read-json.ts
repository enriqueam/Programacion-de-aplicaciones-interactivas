/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Enrique Álvarez Mesa 
 * @since 12.04.2023
 * @description Program that reads JSON data from URL
 */

/**
 * @description Data type object
 * @interface singleData
 * @property {string} anio Year
 * @property {string} nacion Country
 * @property {string} total Total of turist
 */
interface SingleData {
  anio: string,
  nacion: string,
  total: string
}

/**
 * @description Data type object
 * @interface Data
 * @property {singleData[]} DATOS Data array of singleData type objects
 */
export interface Data {
  DATOS: SingleData[];
}

/**
 * @description Fetches the data from the server
 * @returns 
 */
export async function fetchData(): Promise<Data> {
  const response = await fetch('/data');
  const json = await response.json();
  return json;
}
