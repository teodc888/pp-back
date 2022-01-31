const {Portfolios} = require('../../db.js');

async function deletePortfolio(req, res, next) {
    try {
        const {id} = req.body;
        const deletedPortfolio = await Portfolios.destroy({
            where: {
                id
            }
        });
        if(deletedPortfolio === 0){
            return res.status(404).send("No se ha encontrado el portfolio");
        }else{
            res.status(200).send("porfolio eliminado");
        }

    } catch (error) {
        next(error);
    }
}

module.exports = {deletePortfolio};