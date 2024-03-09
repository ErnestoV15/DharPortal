const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController');

// Mostrar todos los usuarios
router.get('/', usuarioController.visualizar);

// Insertar un nuevo usuario
router.post('/crear', usuarioController.crear);

// Editar un usuario
router.post('/editar', usuarioController.editar);

// Eliminar un usuario por ID
router.get('/borrar/:id', usuarioController.eliminar);

module.exports = router;
