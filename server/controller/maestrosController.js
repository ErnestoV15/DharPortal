const Maestro = require('../models/MaestroModel');

// Insertar
function crear(req, res) {
    const nuevoMaestro = new Maestro({
        ID_usuario: req.body.ID_usuario,
        Nombre: req.body.Nombre,
        Apellido: req.body.Apellido,
        Dni: req.body.Dni
    });

    nuevoMaestro.save()
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

// Mostrar
visualizar = async (req, res) => {
    try {
        const maestros = await Maestro.find();
        console.log('Se ejecutó el visualizar');
        res.json(maestros);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error });
    }
};

// Editar
function editar(req, res) {
    const id = req.body.ID_Maestro_editar;
    const ID_usuario = req.body.ID_usuario_editar;
    const Nombre = req.body.Nombre_editar;
    const Apellido = req.body.Apellido_editar;
    const Dni = req.body.Dni_editar;

    Maestro.findByIdAndUpdate(
        id,
        {
            ID_usuario: ID_usuario,
            Nombre: Nombre,
            Apellido: Apellido,
            Dni: Dni
        }
    )
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

// Eliminar
function eliminar(req, res) {
    const id = req.params.id;
    Maestro.findByIdAndDelete(id)
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizar,
    crear,
    editar,
    eliminar
};
