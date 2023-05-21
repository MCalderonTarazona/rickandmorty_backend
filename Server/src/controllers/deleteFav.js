const {Favorite} = require("../DB_connection");

const deleteFav = async (req, res) => {
    try {
        console.log("deleteFav");
        const {id} = req.params
        const idFind = await Favorite.findByPk(id);
        idFind.destroy();
        const newFavorites = await Favorite.findAll();
        res.status(200).json(newFavorites);

    } catch (error) {
        res.status(500).send(error.message);
    }
    
}


module.exports = deleteFav;