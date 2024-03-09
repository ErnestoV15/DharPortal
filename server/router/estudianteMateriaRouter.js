const express = require('express');
const router = express.Router();
const estudianteMateriaController = require('../controllers/EstudianteMateriaController');

// Mostrar todas las asignaciones de estudiantes a materias
router.get('/', estudianteMateriaController.visualizar);

// Insertar una nueva asignación de estudiante a materia
router.post('/crear', estudianteMateriaController.crear);

// Editar una asignación de estudiante a materia
router.post('/editar', estudianteMateriaController.editar);

// Eliminar una asignación de estudiante a materia por ID
router.get('/borrar/:id', estudianteMateriaController.eliminar);

module.exports = router;
