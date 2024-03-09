const Cita = require('../models/CitaModel');

// Insertar
function crear(req, res) {
    const nuevaCita = new Cita({
        ID_Padre: req.body.ID_Padre,
        ID_Maestro: req.body.ID_Maestro,
        ID_Estudiante: req.body.ID_Estudiante,
        ID_Materia: req.body.ID_Materia,
        fechaHora: req.body.fechaHora,
        Descripcion: req.body.Descripcion
    });

    nuevaCita.save()
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

// Mostrar
visualizar = async (req, res) => {
    try {
        const citas = await Cita.find();
        console.log('Se ejecutó el visualizar');
        res.json(citas);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error });
    }
};

// Editar
function editar(req, res) {
    const id = req.body.ID_Cita_editar;
    const ID_Padre = req.body.ID_Padre_editar;
    const ID_Maestro = req.body.ID_Maestro_editar;
    const ID_Estudiante = req.body.ID_Estudiante_editar;
    const ID_Materia = req.body.ID_Materia_editar;
    const fechaHora = req.body.fechaHora_editar;
    const Descripcion = req.body.Descripcion_editar;

    Cita.findByIdAndUpdate(
        id,
        {
            ID_Padre: ID_Padre,
            ID_Maestro: ID_Maestro,
            ID_Estudiante: ID_Estudiante,
            ID_Materia: ID_Materia,
            fechaHora: fechaHora,
            Descripcion: Descripcion
        }
    )
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

// Eliminar
function eliminar(req, res) {
    const id = req.params.id;
    Cita.findByIdAndDelete(id)
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizar,
    crear,
    editar,
    eliminar
};
