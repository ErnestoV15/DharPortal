const Estudiante = require('../models/EstudiantesModel');

// Insertar
function crear(req, res) {
    const nuevoEstudiante = new Estudiante({
        ID_usuario: req.body.ID_usuario,
        Nombre: req.body.Nombre,
        Apellido: req.body.Apellido,
        Edad: req.body.Edad,
        Grado: req.body.Grado
    });

    nuevoEstudiante.save()
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

// Mostrar
visualizar = async (req, res) => {
    try {
        const estudiantes = await Estudiante.find();
        console.log('Se ejecutó el visualizar');
        res.json(estudiantes);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error });
    }
};

// Editar
function editar(req, res) {
    const id = req.body.ID_Estudiante_editar;
    const ID_usuario = req.body.ID_usuario_editar;
    const Nombre = req.body.Nombre_editar;
    const Apellido = req.body.Apellido_editar;
    const Edad = req.body.Edad_editar;
    const Grado = req.body.Grado_editar;

    Estudiante.findByIdAndUpdate(
        id,
        {
            ID_usuario: ID_usuario,
            Nombre: Nombre,
            Apellido: Apellido,
            Edad: Edad,
            Grado: Grado
        }
    )
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

// Eliminar
function eliminar(req, res) {
    const id = req.params.id;
    Estudiante.findByIdAndDelete(id)
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizar,
    crear,
    editar,
    eliminar
};
