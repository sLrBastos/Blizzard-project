const mountsRouter = require("./Mounts.routes")
const authRouter = require("./OAuth.routes")

const setupRoutes = (server) => {
    server.use("/auth", authRouter)
    server.use("/gamedata", mountsRouter)
}


module.exports = {
    setupRoutes
}