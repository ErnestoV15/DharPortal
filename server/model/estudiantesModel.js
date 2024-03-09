const mongoose = require('mongoose');

const EstudiantesSchema = mongoose.Schema({
    ID_Estudiante: {
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
    Edad: {
        type: String,
        required: true
    },
    Grado: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Estudiante', EstudiantesSchema);
