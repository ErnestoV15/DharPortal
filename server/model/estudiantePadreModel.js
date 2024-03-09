const mongoose = require('mongoose');

const EstudiantePadreSchema = mongoose.Schema({
    ID_EstudiantePadre: {
        type: String,
        required: false 
    },
    Id_Estudiante: {
        type: String,
        required: true
    },
    Id_Padre: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('EstudiantePadre', EstudiantePadreSchema);
