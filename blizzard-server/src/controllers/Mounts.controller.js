const Mount = require("../models/mounts.model")

const mountDatabase = (req, res) => {
    Mount.insertMounts(mounts)
}


module.exports = {
    mountDatabase
}