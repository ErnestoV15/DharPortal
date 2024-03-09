const mongoose = require('mongoose');

const PadreSchema = mongoose.Schema({
    ID_Padre: {
        type: String,
        required: false 
    },
    Nombre: {
        type: String,
        required: true
    },
    Apellido: {
        type: String,
        required: true
    },
    DNI: {
        type: String,
        required: true
    },
    ID_usuario: {
        type: String,
        required: true
    },
    Parentezco: {
        type: String,
        required: false 
    }
});

module.exports = mongoose.model('Padre', PadreSchema);
