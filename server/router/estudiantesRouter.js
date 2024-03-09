const express = require('express');
const router = express.Router();
const estudianteController = require('../controllers/EstudianteController');

// Mostrar todos los estudiantes
router.get('/', estudianteController.visualizar);

// Insertar un nuevo estudiante
router.post('/crear', estudianteController.crear);

// Editar un estudiante
router.post('/editar', estudianteController.editar);

// Eliminar un estudiante por ID
router.get('/borrar/:id', estudianteController.eliminar);

module.exports = router;
