const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base de la tabla'
})
.option('l',{
    alias: 'list',
    type: 'boolean',
    default: false,
    describe: "Lista la tabla en consola"
})
.option('d',{
    alias: 'desde',
    type: 'number',
    default: 1,
    describe: "Desde que numero empieza el multiplicador"
})
.option('h',{
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: "Hasta que numero termina el multiplicador"
})
.check((argv, options)=>{
    if(isNaN(argv.base)){
        throw "La base debe ser un numero"
    } else {
        return true
    }
})
.argv;


module.exports = argv