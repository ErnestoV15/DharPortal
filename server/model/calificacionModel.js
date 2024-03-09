const mongoose = require('mongoose');

const CalificacionSchema = mongoose.Schema({
    Id_Calificacion: {
        type: String,
        required: false // Puedes cambiar a true si se requiere
    },
    Id_Materia: {
        type: String,
        required: true
    },
    Id_Estudiante: {
        type: String,
        required: true
    },
    notas: {
        nota1: {
            type: Number,
            required: true
        },
        observacion1: {
            type: String,
            required: true
        },
        nota2: {
            type: Number,
            required: true
        },
        observacion2: {
            type: String,
            required: true
        },
        nota3: {
            type: Number,
            required: true
        },
        observacion3: {
            type: String,
            required: true
        },
        nota4: {
            type: Number,
            required: true
        },
        observacion4: {
            type: String,
            required: true
        }
    }
});

module.exports = mongoose.model('Calificacion', CalificacionSchema);
