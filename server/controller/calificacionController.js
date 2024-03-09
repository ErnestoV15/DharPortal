const Calificacion = require('../models/CalificacionModel');

// Insertar
function crear(req, res) {
    const nuevaCalificacion = new Calificacion({
        Id_Materia: req.body.Id_Materia,
        Id_Estudiante: req.body.Id_Estudiante,
        notas: {
            nota1: req.body.nota1,
            observacion1: req.body.observacion1,
            nota2: req.body.nota2,
            observacion2: req.body.observacion2,
            nota3: req.body.nota3,
            observacion3: req.body.observacion3,
            nota4: req.body.nota4,
            observacion4: req.body.observacion4
        }
    });

    nuevaCalificacion.save()
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

// Mostrar
visualizar = async (req, res) => {
    try {
        const calificaciones = await Calificacion.find();
        console.log('Se ejecutó el visualizar');
        res.json(calificaciones);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error });
    }
};

// Editar
function editar(req, res) {
    const id = req.body.id_editar;
    const Id_Materia = req.body.Id_Materia_editar;
    const Id_Estudiante = req.body.Id_Estudiante_editar;
    const notas = {
        nota1: req.body.nota1_editar,
        observacion1: req.body.observacion1_editar,
        nota2: req.body.nota2_editar,
        observacion2: req.body.observacion2_editar,
        nota3: req.body.nota3_editar,
        observacion3: req.body.observacion3_editar,
        nota4: req.body.nota4_editar,
        observacion4: req.body.observacion4_editar
    };

    Calificacion.findByIdAndUpdate(
        id,
        {
            Id_Materia: Id_Materia,
            Id_Estudiante: Id_Estudiante,
            notas: notas
        }
    )
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

// Eliminar
function eliminar(req, res) {
    const id = req.params.id;
    Calificacion.findByIdAndDelete(id)
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizar,
    crear,
    editar,
    eliminar
};
