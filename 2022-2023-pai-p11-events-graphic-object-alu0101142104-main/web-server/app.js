/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Enrique Álvarez Mesa
 * @since 12.04.2023
 * @description This code sets up a static file server in an Express.js 
 * application by telling Express to serve static files from a specific directory on the file system.
 * @see {@link https://expressjs.com/en/starter/static-files.html}
 * @see {@link https://www.digitalocean.com/community/tutorials/nodejs-serving-static-files-in-express}
 * @see {@link https://github.com/nodejs/help/issues/2907#issuecomment-757446568}
 */

import express from 'express';
import path from 'path';              // provides utilities for working with file and directory paths.
import { fileURLToPath } from 'url';  // Used to convert a file URL to a file path.
import { dirname } from 'path';       // The dirname function from the path module is used to get the directory name of a file path.

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//set the port
app.set('port', 8080);

// Sirve archivos estáticos desde el directorio "public"
app.use(express.static(path.join(__dirname, '../www/public/')));

// Agrega una segunda ruta para servir archivos estáticos desde el directorio "src"
app.use('/src', express.static(path.join(__dirname, '../www/src/')));

// Agrega una tercera ruta para servir archivos estáticos desde el directorio "img"
app.use('/img', express.static(path.join(__dirname, '../img/')));

// Agrega una cuarta ruta para servir archivos estáticos desde el directorio "docs"
app.use('/docs', express.static(path.join(__dirname, '../docs/')));

// Start the server and listens for requests on the specified port
const SERVER = app.listen(app.get('port'), '0.0.0.0', function () {
  console.log('The server is running on http:localhost:' + app.get('port'));
});
