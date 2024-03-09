const express = require('express');
const router = express.Router();
const citaController = require('../controllers/CitaController');

// Mostrar todas las citas
router.get('/', citaController.visualizar);

// Insertar una nueva cita
router.post('/crear', citaController.crear);

// Editar una cita
router.post('/editar', citaController.editar);

// Eliminar una cita por ID
router.get('/borrar/:id', citaController.eliminar);

module.exports = router;
