const express = require('express');
const router = express.Router();
const maestroController = require('../controllers/MaestroController');

// Mostrar todos los maestros
router.get('/', maestroController.visualizar);

// Insertar un nuevo maestro
router.post('/crear', maestroController.crear);

// Editar un maestro
router.post('/editar', maestroController.editar);

// Eliminar un maestro por ID
router.get('/borrar/:id', maestroController.eliminar);

module.exports = router;
