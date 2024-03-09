const mongoose = require('mongoose');

const EstudianteMateriaSchema = mongoose.Schema({
    Id_EstudianteMateria: {
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
    }
});

module.exports = mongoose.model('EstudianteMateria', EstudianteMateriaSchema);
