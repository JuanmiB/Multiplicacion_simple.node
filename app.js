const argv = require('./config/yargs')
const colors = require('colors')
const crearArchivo = require('./helpers/multiplicar')




console.clear()
 console.log(argv, "Soy el argumento que trae Yargs")




crearArchivo(argv.base, argv.list, argv.desde, argv.hasta)
.then(tabla => console.log("El archivo".green, tabla, "ha sido creado".green, `con una base de ${argv.base}`.cyan))
.catch(err => console.log(err))
