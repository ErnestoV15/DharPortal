const mongoose = require('mongoose');

const RolSchema = mongoose.Schema({
    ID_rol: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Rol', RolSchema);
