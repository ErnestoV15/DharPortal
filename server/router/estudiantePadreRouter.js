const express = require('express');
const router = express.Router();
const estudiantePadreController = require('../controllers/EstudiantePadreController');

// Mostrar todas las asignaciones de estudiantes a padres
router.get('/', estudiantePadreController.visualizar);

// Insertar una nueva asignación de estudiante a padre
router.post('/crear', estudiantePadreController.crear);

// Editar una asignación de estudiante a padre
router.post('/editar', estudiantePadreController.editar);

// Eliminar una asignación de estudiante a padre por ID
router.get('/borrar/:id', estudiantePadreController.eliminar);

module.exports = router;
