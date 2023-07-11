const Mount = require("../models/mounts.model")
const mounts = require("../../SQL/mounts.data.json")

const mountIntoDB = (req, res) => {
    mounts.map((mount) => Mount.insertMounts(mount))
    res.status(200).send("Mount Table with data")
}


module.exports = {
    mountIntoDB
}