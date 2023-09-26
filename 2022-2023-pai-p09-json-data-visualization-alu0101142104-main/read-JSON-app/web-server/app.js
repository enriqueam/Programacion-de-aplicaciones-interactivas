/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Enrique Álvarez Mesa
 * @since Mar 25, 2023
 * @description This code sets up a static file server in an Express.js 
 * application by telling Express to serve static files from a specific directory on the file system.
 * @see {@link https://expressjs.com/en/starter/static-files.html}
 * @see {@link https://www.digitalocean.com/community/tutorials/nodejs-serving-static-files-in-express}
 * @see {@link https://github.com/nodejs/help/issues/2907#issuecomment-757446568}
 */

import express from 'express';
import fetch from 'node-fetch';       // To make http requests
import path from 'path';              // provides utilities for working with file and directory paths.
import { fileURLToPath } from 'url';  // Used to convert a file URL to a file path.
import { dirname } from 'path';       // The dirname function from the path module is used to get the directory name of a file path.

const app = express();

//set the port
app.set('port', 8080);

// define a route for fetching data
// When a GET request is made to the '/data' endpoint, the code inside the callback function will be executed. 
// The function uses node-fetch to make a request to an external API, then sends the response as JSON to the client.
app.get('/data', async (req, res) => {
  try {
    /* const URL = 'https://datos.tenerife.es/ckan/dataset/e91d4de2-6df6-4968-81cc-3038e053a645/resource/5b22ce7c-d406-4cc9-9444-15803df95ab2/download/produccion-vitivinicola-por-consejo-regulador.json'; */
    const URL = 'https://datos.tenerife.es/ckan/dataset/4a803657-75ec-4e78-b123-b9f4749199cb/resource/38bbc40a-a007-4379-819d-2cef95787f7e/download/turistasalojadossantacruz.json';
    const response = await fetch(URL);
    const json = await response.json();
    res.json(json);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching data.');
  }
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Sirve archivos estáticos desde el directorio "public"
app.use(express.static(path.join(__dirname, '../www/public/')));
// Agrega una segunda ruta para servir archivos estáticos desde el directorio "src"
app.use('/src', express.static(path.join(__dirname, '../www/src')));

// Start the server and listens for requests on the specified port
const SERVER = app.listen(app.get('port'), '0.0.0.0', function () {
  console.log('The server is running on http:localhost:' + app.get('port'));
});
