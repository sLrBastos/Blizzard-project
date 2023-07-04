const database = require("../../database")


const insertAccessToken = (accessToken) => {
    return database
    .query("INSERT INTO access_token SET ?", accessToken)
    .then(([results]) => results)
}

const findAccessToken = (accessToken) => {
    return database
    .query("SELECT * from access_token where accesstoken = ?", accessToken)
}

module.exports = {
    insertAccessToken,
    findAccessToken
}