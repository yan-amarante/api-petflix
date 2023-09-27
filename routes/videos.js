const express = require("express");
const router = express.Router();
const controller = require("../controllers/videos");

router.get("/listar-videos", controller.listarVideos);
router.get("/mostar-video/:id", controller.mostrarVideo);

module.exports = router