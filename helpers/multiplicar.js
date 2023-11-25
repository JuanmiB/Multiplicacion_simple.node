const fs = require('fs');

const crearArchivo = async(base = 5, list, desde = 1, hasta = 10) => {
    
    try {
        console.log(" ============= ".bgGreen);
        console.log(`| TABLA DEL ${base}|`.bgGreen);
        console.log(" ============= ".bgGreen);
        let salida = ""

        for (let index = desde; index <= hasta; index++) {
            salida += `${base} x ${index} = ${base * index}\n`
        }

        if (list) {
            console.log(salida);
        } else(console.log("no sale nada de la consola"))

        fs.writeFileSync(`./archivos_tablas/tabla-${base}.txt`, salida)

        return `tabla-${base}.txt`

    } catch (err) {
        console.log(err);
    }
}

module.exports = crearArchivo