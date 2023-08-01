const playerRouter = require("express").Router()
const {fetchPlayerData} = require("../helpers/Player")


playerRouter.get("/playertest", async (req, res) => {
    const data = await fetchPlayerData()
    console.log(data.pets)
    res.json(data.pets)
})

module.exports = playerRouter