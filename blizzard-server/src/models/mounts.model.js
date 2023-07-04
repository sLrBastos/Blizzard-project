const database = require("../../database")


const insertMounts = (mounts) => {
    return database
    .query("INSERT INTO config SET ?", mounts)
    .then(([results]) => results)
}


module.exports = {
    insertMounts,
}