const petsRouter = require("express").Router()
const {fetchPets} = require("../helpers/Pets")


// petsRouter.get("/pet", async (req, res) => {
//     const data = await fetchPets()
//     console.log(data.pets)
//     res.json(data.pets)
// })


module.exports = petsRouter