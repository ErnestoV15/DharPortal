const express = require('express');
const router = express.Router();
const materiaController = require('../controllers/MateriaController');

// Mostrar todas las materias
router.get('/', materiaController.visualizar);

// Insertar una nueva materia
router.post('/crear', materiaController.crear);

// Editar una materia
router.post('/editar', materiaController.editar);

// Eliminar una materia por ID
router.get('/borrar/:id', materiaController.eliminar);

module.exports = router;
