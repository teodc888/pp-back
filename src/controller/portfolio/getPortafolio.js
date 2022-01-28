const {Portfolios} = require('../../db.js');

async function mostrarPortfolio (req, res, next) {
    try {
        const portfolio = await Portfolios.findAll();
        res.status(200).json(portfolio);
    } catch (error) {
        next(error);
    }
}

module.exports = {mostrarPortfolio};