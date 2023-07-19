const { access } = require("fs")
const database = require("../../database")

const deleteAccessToken = () => {
    return database
    .query("DELETE FROM accesstoken")
    .then(([results]) => results)
}
const insertAccessToken = (accessToken) => {
    return database
    .query("INSERT INTO accesstoken SET ?", accessToken)
    .then(([results]) => results)
}

const findAccessToken = (access_token) => {
    return database
    .query("SELECT * from accesstoken where access_token = ?", access_token)
}

module.exports = {
    insertAccessToken,
    findAccessToken,
    deleteAccessToken
}