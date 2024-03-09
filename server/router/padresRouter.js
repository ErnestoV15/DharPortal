const express = require('express');
const router = express.Router();
const padreController = require('../controllers/PadreController');

// Mostrar todos los padres
router.get('/', padreController.visualizar);

// Insertar un nuevo padre
router.post('/crear', padreController.crear);

// Editar un padre
router.post('/editar', padreController.editar);

// Eliminar un padre por ID
router.get('/borrar/:id', padreController.eliminar);

module.exports = router;
