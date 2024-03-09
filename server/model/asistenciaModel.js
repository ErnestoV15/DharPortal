const mongoose = require('mongoose');

const AsistenciaSchema = mongoose.Schema({
    Id_Asistencia: {
        type: String,
        required: false // Puedes cambiar a true si se requiere
    },
    Id_Estudiante: {
        type: String,
        required: true
    },
    Id_Materia: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    Estado: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Asistencia', AsistenciaSchema);
