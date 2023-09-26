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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchData } from './read-json.js';
import { LineChart } from './line-chart.js';
/**
  * @description Extracts the data from the JSON object
  * @param data JSON object
  * @returns ProcessedObject object
  */
function extractData(data) {
    const datosPorPais = {};
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
const main = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const inputData = yield fetchData();
        const extractedData = extractData(inputData);
        console.log(extractedData);
        const newLineChart = new LineChart('Turistas alojados en Tenerife en diversos años', extractedData);
        newLineChart.draw();
    });
};
main();
