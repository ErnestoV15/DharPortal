const Materia = require('../models/MateriasModel');

// Insertar
function crear(req, res) {
    const nuevaMateria = new Materia({
        Nombre: req.body.Nombre,
        Descripcion: req.body.Descripcion,
        Grado: req.body.Grado,
        Id_Maestro: req.body.Id_Maestro
    });

    nuevaMateria.save()
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

// Mostrar
visualizar = async (req, res) => {
    try {
        const materias = await Materia.find();
        console.log('Se ejecutó el visualizar');
        res.json(materias);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error });
    }
};

// Editar
function editar(req, res) {
    const id = req.body.Id_Materia_editar;
    const Nombre = req.body.Nombre_editar;
    const Descripcion = req.body.Descripcion_editar;
    const Grado = req.body.Grado_editar;
    const Id_Maestro = req.body.Id_Maestro_editar;

    Materia.findByIdAndUpdate(
        id,
        {
            Nombre: Nombre,
            Descripcion: Descripcion,
            Grado: Grado,
            Id_Maestro: Id_Maestro
        }
    )
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

// Eliminar
function eliminar(req, res) {
    const id = req.params.id;
    Materia.findByIdAndDelete(id)
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizar,
    crear,
    editar,
    eliminar
};
