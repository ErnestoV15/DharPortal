const Padre = require('../models/PadreModel');

// Insertar
function crear(req, res) {
    const nuevoPadre = new Padre({
        Nombre: req.body.Nombre,
        Apellido: req.body.Apellido,
        DNI: req.body.DNI,
        ID_usuario: req.body.ID_usuario,
        Parentezco: req.body.Parentezco
    });

    nuevoPadre.save()
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

// Mostrar
visualizar = async (req, res) => {
    try {
        const padres = await Padre.find();
        console.log('Se ejecutó el visualizar');
        res.json(padres);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error });
    }
};

// Editar
function editar(req, res) {
    const id = req.body.ID_Padre_editar;
    const Nombre = req.body.Nombre_editar;
    const Apellido = req.body.Apellido_editar;
    const DNI = req.body.DNI_editar;
    const ID_usuario = req.body.ID_usuario_editar;
    const Parentezco = req.body.Parentezco_editar;

    Padre.findByIdAndUpdate(
        id,
        {
            Nombre: Nombre,
            Apellido: Apellido,
            DNI: DNI,
            ID_usuario: ID_usuario,
            Parentezco: Parentezco
        }
    )
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

// Eliminar
function eliminar(req, res) {
    const id = req.params.id;
    Padre.findByIdAndDelete(id)
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizar,
    crear,
    editar,
    eliminar
};
