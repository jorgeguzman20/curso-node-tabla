const { crearArchivo } = require("./helpers/multiplicar");

const argv = require ('./config/yargs');
var colors = require('colors');
console.clear();

/* const [, , arg3 = 'base=5'] = process.argv;
const [, base] = arg3.split('=');
 */

console.log(argv .rainbow);

//console.log(base);

crearArchivo(argv.base, argv.listar)
  .then((nombreArchivo) => console.log(nombreArchivo, "Creado"))
  .catch((err) => console.log(err));
