const filesystem = require("fs");

const crearArchivo = async (base = 5, listar =false) => {
  try {
    let salida = "";

    for (let index = 1; index <= 10; index++) {
      salida += `${base}x ${index} = ${base * index}\n `;
    }
    if (listar) {
      console.log("===============");
      console.log(`Tabla del ${base}`);
      console.log("===============");
      console.log(salida);
    }

    filesystem.writeFileSync(`tabla-${base}.txt`, salida);

    return `Archivo tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
