const Asistencia = require('../models/AsistenciaModel');

// Insertar
function crear(req, res) {
    const nuevaAsistencia = new Asistencia({
        Id_Estudiante: req.body.Id_Estudiante,
        Id_Materia: req.body.Id_Materia,
        fecha: req.body.fecha,
        Estado: req.body.Estado
    });

    nuevaAsistencia.save()
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

// Mostrar
visualizar = async (req, res) => {
    try {
        const asistencias = await Asistencia.find();
        console.log('Se ejecutó el visualizar');
        res.json(asistencias);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error });
    }
};

// Editar
function editar(req, res) {
    const id = req.body.id_editar;
    const Id_Estudiante = req.body.Id_Estudiante_editar;
    const Id_Materia = req.body.Id_Materia_editar;
    const fecha = req.body.fecha_editar;
    const Estado = req.body.Estado_editar;

    Asistencia.findByIdAndUpdate(
        id,
        {
            Id_Estudiante: Id_Estudiante,
            Id_Materia: Id_Materia,
            fecha: fecha,
            Estado: Estado
        }
    )
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

// Eliminar
function eliminar(req, res) {
    const id = req.params.id;
    Asistencia.findByIdAndDelete(id)
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizar,
    crear,
    editar,
    eliminar
};
