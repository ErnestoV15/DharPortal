const EstudiantePadre = require('../models/EstudiantePadreModel');

// Insertar
function crear(req, res) {
    const nuevoEstudiantePadre = new EstudiantePadre({
        Id_Estudiante: req.body.Id_Estudiante,
        Id_Padre: req.body.Id_Padre
    });

    nuevoEstudiantePadre.save()
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

// Mostrar
visualizar = async (req, res) => {
    try {
        const estudiantesPadres = await EstudiantePadre.find();
        console.log('Se ejecutó el visualizar');
        res.json(estudiantesPadres);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error });
    }
};

// Editar
function editar(req, res) {
    const id = req.body.ID_EstudiantePadre_editar;
    const Id_Estudiante = req.body.Id_Estudiante_editar;
    const Id_Padre = req.body.Id_Padre_editar;

    EstudiantePadre.findByIdAndUpdate(
        id,
        {
            Id_Estudiante: Id_Estudiante,
            Id_Padre: Id_Padre
        }
    )
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

// Eliminar
function eliminar(req, res) {
    const id = req.params.id;
    EstudiantePadre.findByIdAndDelete(id)
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizar,
    crear,
    editar,
    eliminar
};
