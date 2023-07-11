const database = require("../../database")


const insertMounts = (mounts) => {
    return database
    .query("INSERT INTO mounts SET ?", mounts)
    .then(([results]) => results)
}


module.exports = {
    insertMounts,
}