const { Portfolios } = require("../../db.js");

async function editarPortfolio(req, res, next) {
  try {
    const { titulo, descripcion, imagen, link, github, id } = req.body;
    const portfolio = await Portfolios.findOne({ where: { id } });

    if (!portfolio)
      return res.status(404).send({ message: "Product not found" });

    await portfolio.update({
      titulo,
      descripcion,
      imagen,
      link,
      github,
    });

    return res.status(200).send({ message: "Product updated" });
    
  } catch (error) {
    next(error);
  }
}
//a ver si ahora me deja

module.exports = { editarPortfolio };
