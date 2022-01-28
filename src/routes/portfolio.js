const { Router } = require("express");
const router = Router();
const {createPortfolio} = require("../controller/portfolio/createPortfolio");
const {mostrarPortfolio} = require("../controller/portfolio/getPortafolio");
router.post("/", createPortfolio);
router.get("/", mostrarPortfolio);


module.exports = router;