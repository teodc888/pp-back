const {Portfolios} = require('../../db.js');

async function createPortfolio(req, res, next) {
    try {
        const {titulo, descripcion, imagen, link, github} = req.body;
        const newPortfolio = await Portfolios.create({
            titulo,
            descripcion,
            imagen,
            link,
            github
        });
        res.status(200).send(newPortfolio);

    } catch (error) {
        next(error);
    }
}

module.exports = {createPortfolio};