/*const axios = require("axios");

const getCharById = (res,id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data}) => {
    const {id, name, gender, species, origin, image, status } = data;
    res.writeHead(200,{"Content-Type": "application/json"});
    res.end(JSON.stringify({id, name, gender, species, origin, image, status }));
    })
    .catch((reason) => {
    res.writeHead(500,{"Content-Type": "text/plain"});
    res.end(reason.message);
    })
}

module.exports = getCharById;*/
const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

/*const getCharById = (req,res) => {
    const { id } = req.params;
    axios.get(`${URL}${id}`)
    .then(({data}) => {
        if(data){
            console.log(data);
            const {id, name, gender, species, origin, image, status } = data;
            res.status(200).json({id, name, gender, species, origin, image, status })
        }else{
            res.status(404).send("Not fount")
        }
    })
    .catch((reason) => {
        res.status(404).json(reason.message)
    }) 
}*/

const getCharById = async (req,res) =>{
    try {
        const { data } = await axios.get(`${URL}${req.params.id}`);
        const {id, name, gender, species, origin, image, status } = data;
        res.status(200).json({id, name, gender, species, origin, image, status })
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = getCharById;