const {Favorite} = require("../DB_connection");

const postFav = async (req, res) => {
    try {
        console.log("postFav");
        const {id, name, status, species, gender, origin, image} = req.body;
        console.log(req.body);
        if(!id || !name || !origin || !status || !image || !species || !gender){
            return res.status(401).send('Faltan datos');
        }

        const [newFavorite, created] = await Favorite.findOrCreate({
            where: { id, name, status, gender, origin, image, species },
        });

        const newFavorites = await Favorite.findAll();
        res.status(200).json(newFavorites);
        
    } catch (error) {
        res.status(500).send(error.message);
    }
    
}


module.exports = postFav;
