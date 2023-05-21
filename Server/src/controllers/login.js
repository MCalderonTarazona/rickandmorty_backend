/*const users = require("../utils/users")

const login = (req, res) => {
    const {email, password} = req.query;
    const accept = users.find(element => email === element.email && password === element.password);
    if(accept){
        res.status(200).json({access: true})
    } else {
        res.status(404).json({access: false})
    } 
}*/

const {User} = require("../DB_connection");

const login = async (req, res) => {  
    try {
        const {email, password} = req.query;
        if (email && password) {
            const emailFind = await User.findOne({ where: { email: email } });
                if (!emailFind) {
                    res.status(404).send("Usuario no encontrado");
                } else {
                    const passFind = await User.findOne({ where: { email: email, password: password } });
                    if (!passFind) {
                        res.status(404).send("Contraseña incorrecta"); 
                    } else {
                        res.status(200).json({access: true})
                    }
                }   
        } else {
            res.status(404).send("Faltan datos");
        }
        
    } catch (error) {
        res.status(404).json({access: false})
    }
}

module.exports = login;

