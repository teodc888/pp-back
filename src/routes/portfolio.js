const { Router } = require("express");
const router = Router();
const { createPortfolio } = require("../controller/portfolio/createPortfolio");
const { mostrarPortfolio } = require("../controller/portfolio/getPortafolio");
const { deletePortfolio } = require("../controller/portfolio/deletePortfolio");
const { editarPortfolio } = require("../controller/portfolio/editarPortfolio");

router.post("/", createPortfolio);
router.get("/", mostrarPortfolio);
router.delete("/", deletePortfolio);
router.put("/", editarPortfolio);

module.exports = router;
