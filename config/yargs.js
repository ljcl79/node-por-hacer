const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer',
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado'
}

const argv = require('yargs')
    .command(
        'crear',
        'Crear elemento', 
        {descripcion})
    .command(
        'actualizar',
        'Actualizar elemento', 
        {
        descripcion,
        completado,
    })
    .command(
        'borrar',
        'Borrar elemento', 
        {descripcion}).help().argv;

    module.exports = {argv}