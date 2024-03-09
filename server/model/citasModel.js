const mongoose = require('mongoose');

const CitaSchema = mongoose.Schema({
    ID_Cita: {
        type: String,
        required: false 
    },
    ID_Padre: {
        type: String,
        required: true
    },
    ID_Maestro: {
        type: String,
        required: true
    },
    ID_Estudiante: {
        type: String,
        required: true
    },
    ID_Materia: {
        type: String,
        required: true
    },
    fechaHora: {
        type: Date,
        required: true
    },
    Descripcion: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Cita', CitaSchema);
