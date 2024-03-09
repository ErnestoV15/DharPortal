const express = require('express');
const router = express.Router();
const calificacionController = require('../controllers/CalificacionController');

// Mostrar todas las calificaciones
router.get('/', calificacionController.visualizar);

// Insertar una nueva calificación
router.post('/crear', calificacionController.crear);

// Editar una calificación
router.post('/editar', calificacionController.editar);

// Eliminar una calificación por ID
router.get('/borrar/:id', calificacionController.eliminar);

module.exports = router;
