const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'Este es el valor para la tabla que deseo crear',
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    demandOption: false,
    description: 'Esta opcion lista o no, si se envia --l, lista en consola la tabla enviada'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base debe ser un numero";
    }
    return true;
  }).argv;

  module.exports = argv;