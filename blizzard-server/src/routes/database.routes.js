const databaseRouter = require("express").Router()
const databaseController = require("../controllers/Database.controller")

databaseRouter.post("/", databaseController.mountIntoDB)

module.exports = databaseRouter