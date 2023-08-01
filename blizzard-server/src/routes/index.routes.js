const database = require("../../database")
const mountsRouter = require("./Mounts.routes")
const authRouter = require("./OAuth.routes")
const databaseRouter = require("./database.routes")
const playerRouter = require("../routes/player.routes")
const petRouter = require("../routes/Pets.routes")

const setupRoutes = (server) => {
    server.use("/auth", authRouter)
    server.use("/gamedata", mountsRouter)
    server.use("/db",databaseRouter)
    server.use("player",playerRouter )
    server.use("/pets", petRouter)
}


module.exports = {
    setupRoutes
}