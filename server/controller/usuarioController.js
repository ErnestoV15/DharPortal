const Usuario = require('../models/UsuarioModel');

// Insertar
function crear(req, res) {
    const nuevoUsuario = new Usuario({
        email: req.body.email,
        password: req.body.password,
        ID_rol: req.body.ID_rol
    });

    nuevoUsuario.save()
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

// Mostrar
visualizar = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        console.log('Se ejecutó el visualizar');
        res.json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error });
    }
};

// Editar
function editar(req, res) {
    const id = req.body.ID_usuario_editar;
    const email = req.body.email_editar;
    const password = req.body.password_editar;
    const ID_rol = req.body.ID_rol_editar;

    Usuario.findByIdAndUpdate(
        id,
        {
            email: email,
            password: password,
            ID_rol: ID_rol
        }
    )
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

// Eliminar
function eliminar(req, res) {
    const id = req.params.id;
    Usuario.findByIdAndDelete(id)
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizar,
    crear,
    editar,
    eliminar
};
