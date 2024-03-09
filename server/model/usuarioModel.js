const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    ID_usuario: {
        type: String,
        required: false // Puedes cambiar a true si se requiere
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    ID_rol: {
        type: String,
        required: false // Puedes cambiar a true si se requiere
    }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
