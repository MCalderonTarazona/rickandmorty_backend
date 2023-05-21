const {User} = require("../DB_connection");

const postUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const [user, created] = await User.findOrCreate({
            where: { email: email, password: password },
        });

        if (created) {
            res.status(200).send("Usuario Guardado");
        } else {
            res.status(404).send("Faltan datos");
        }
        
    } catch (error) {
        res.status(500).json(error.message)
    }

}

module.exports = postUser;