const express = require('express');
const router = express.Router();
const asistenciaController = require('../controllers/AsistenciaController');

// Mostrar todas las asistencias
router.get('/', asistenciaController.visualizar);

// Insertar una nueva asistencia
router.post('/crear', asistenciaController.crear);

// Editar una asistencia
router.post('/editar', asistenciaController.editar);

// Eliminar una asistencia por ID
router.get('/borrar/:id', asistenciaController.eliminar);

module.exports = router;
