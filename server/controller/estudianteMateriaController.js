const EstudianteMateria = require('../models/EstudianteMateriaModel');

// Insertar
function crear(req, res) {
    const nuevaEstudianteMateria = new EstudianteMateria({
        Id_Estudiante: req.body.Id_Estudiante,
        Id_Materia: req.body.Id_Materia
    });

    nuevaEstudianteMateria.save()
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

// Mostrar
visualizar = async (req, res) => {
    try {
        const estudiantesMaterias = await EstudianteMateria.find();
        console.log('Se ejecutó el visualizar');
        res.json(estudiantesMaterias);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error });
    }
};

// Editar
function editar(req, res) {
    const id = req.body.Id_EstudianteMateria_editar;
    const Id_Estudiante = req.body.Id_Estudiante_editar;
    const Id_Materia = req.body.Id_Materia_editar;

    EstudianteMateria.findByIdAndUpdate(
        id,
        {
            Id_Estudiante: Id_Estudiante,
            Id_Materia: Id_Materia
        }
    )
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

// Eliminar
function eliminar(req, res) {
    const id = req.params.id;
    EstudianteMateria.findByIdAndDelete(id)
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizar,
    crear,
    editar,
    eliminar
};
