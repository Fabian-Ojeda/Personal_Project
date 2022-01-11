const mongoose = require('mongoose')
const Schema = mongoose.Schema

const viajeSchema = new Schema({
    nombre: String,
    origen: String,
    destino: String,
    descripcion: String
})

//Crear modelo

const viaje = mongoose.model('viaje', viajeSchema)

module.exports = viaje