const authRouter = require("./OAuth.routes")

const setupRoutes = (server) => {
    server.use("/auth", authRouter)
}


module.exports = {
    setupRoutes
}