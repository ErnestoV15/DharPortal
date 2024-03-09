const express = require('express');
const app = express();
const db = require('./databasedharPortal');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Importing routers
const usuarioRouter = require('./router/usuarioRouter');
const rolRouter = require('./router/roles');
const padreRouter = require('./router/padresRouter');
const materiaRouter = require('./router/materiasRouter');
const maestroRouter = require('./router/maestrosRouter');
const estudianteRouter = require('./router/estudianterouter');
const estudiantePadreRouter = require('./router/estudiantePadreRouter');
const estudianteMateriaRouter = require('./router/estudianteMateriaRouter');
const citaRouter = require('./router/citasRouter');
const calificacionRouter = require('./router/calificacionRouter');
const asistenciaRouter = require('./router/asistenciaRouter');


// Using routers
app.use('/usuarios', usuarioRouter);
app.use('/roles', rolRouter);
app.use('/padres', padreRouter);
app.use('/materias', materiaRouter);
app.use('/maestros', maestroRouter);
app.use('/estudiantes', estudianteRouter);
app.use('/estudiante_padres', estudiantePadreRouter);
app.use('/estudiante_materias', estudianteMateriaRouter);
app.use('/citas', citaRouter);
app.use('/calificaciones', calificacionRouter);
app.use('/asistencias', asistenciaRouter);


app.listen(3000, () => {
    console.log('SERVER IS UP...!');
});
