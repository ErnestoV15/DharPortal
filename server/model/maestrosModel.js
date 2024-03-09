const mongoose = require('mongoose');

const MaestroSchema = mongoose.Schema({
    ID_Maestro: {
        type: String,
        required: false 
    },
    ID_usuario: {
        type: String,
        required: true
    },
    Nombre: {
        type: String,
        required: true
    },
    Apellido: {
        type: String,
        required: true
    },
    Dni: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Maestro', MaestroSchema);
