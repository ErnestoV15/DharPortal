const express = require('express');
const router = express.Router();
const rolController = require('../controllers/RolController');

// Mostrar todos los roles
router.get('/', rolController.visualizar);

// Insertar un nuevo rol
router.post('/crear', rolController.crear);

// Editar un rol
router.post('/editar', rolController.editar);

// Eliminar un rol por ID
router.get('/borrar/:id', rolController.eliminar);

module.exports = router;
