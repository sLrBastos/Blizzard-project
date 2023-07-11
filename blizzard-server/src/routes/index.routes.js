const database = require("../../database")
const mountsRouter = require("./Mounts.routes")
const authRouter = require("./OAuth.routes")
const databaseRouter = require("./database.routes")

const setupRoutes = (server) => {
    server.use("/auth", authRouter)
    server.use("/gamedata", mountsRouter)
    server.use("/db",databaseRouter)
}


module.exports = {
    setupRoutes
}