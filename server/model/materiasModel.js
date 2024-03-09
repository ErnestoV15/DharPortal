const mongoose = require('mongoose');

const MateriasSchema = mongoose.Schema({
    Id_Materia: {
        type: String,
        required: false // Puedes cambiar a true si se requiere
    },
    Nombre: {
        type: String,
        required: true
    },
    Descripcion: {
        type: String,
        required: true
    },
    Grado: {
        type: String,
        required: true
    },
    Id_Maestro: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Materia', MateriasSchema);
