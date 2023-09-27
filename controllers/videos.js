const database = require("../models/database")

const listarVideos = (req, res) => {

    const query = "SELECT id,titulo,thumbnail FROM videos";

    database.query(query).then(
        (resultado) => {
            res.status(200).send( resultado.rows );
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        }
    )
}

const mostrarVideo = (req, res) => {

    const values = [req.params.id]

    const query = "SELECT link FROM videos WHERE id=$1";

    database.query(query, values).then(
        (resultado) => {
            res.status(200).send( resultado.rows );
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        }
    )
}

module.exports = {listarVideos, mostrarVideo}