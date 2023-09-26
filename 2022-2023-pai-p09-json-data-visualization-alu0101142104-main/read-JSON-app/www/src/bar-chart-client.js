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
import { BarChart } from './bar-chart.js';
/**
 * @description Extracts the data from the JSON object
 * @param data JSON object
 * @param zone Zone to extract the data from
 * @returns ProcessedObject object
 */
function extractData(data, zone) {
    let result = {};
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
const main = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const inputData = yield fetchData();
        const result = extractData(inputData, 'Tacoronte-Acentejo');
        const barChart = new BarChart('Producción vitivinícola en Tenerife en Tacoronte-Acentejo. Total (kg) por año', result);
        barChart.draw();
    });
};
main();
